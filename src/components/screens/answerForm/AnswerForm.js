import { useEffect, useState } from "react";
import { Answer } from "@/globalClasses/Answer";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import SubmitButton from "@/components/submitButton/SubmitButton";
import { getUser , updateUser , getNewAnswerId } from "@/utils";
import { useLocalStorage } from "@/localStorage/localStorage";
import { STATE_KEYS } from "@/constants";
import { dummyAnswers, dummyQuestions } from "@/data";

export default function AnswerForm(){
    
    const [value,setValue] = useState(null);
    const [hydrated,setHydrated] = useState(false);

    const [data , setData] = useLocalStorage(STATE_KEYS.data , dummyQuestions);
    const [answers , setAnswers] = useLocalStorage(STATE_KEYS.answers , dummyAnswers);

    const router = useRouter();
    const [qid , setQid] = useState(router.query.qid);
    
   let user = getUser();



    let inValid = false, questionTitle = null , questionDescription = null , index = null;

    useEffect(()=>{
        if(router.isReady){
            setQid(router.query.qid);
        }
    } , [router.isReady]);

    useEffect(()=>{
        setHydrated(true);
    }, []);


    if(qid){
        if(qid.length < 3 || qid[0]!='q' || qid[1]!='-'){
            inValid = true;
        } else {
            index = Number(qid.slice(2));
            if(index < data.length){
                questionTitle = data[index].title;
                questionDescription = data[index].description;
            } else {
                inValid = true;
            }
        }
    }

    function handleSubmit(){
        if(!value || value.trim()==''){
            alert('Please enter non-empty answer!')
            return false;
        }
        
        const stringArray = value.split(' ').filter(item => (item!=''));
        console.log(stringArray);
        let answerDescription = '';

        for(let i=0; i<stringArray.length; ++i){
            answerDescription+=stringArray[i];
            if(i!=stringArray.length-1 && stringArray[i+1]!='.' && stringArray[i+1]!='!' && stringArray[i+1]!=',' && 
                stringArray[i+1]!=';' && stringArray[i+1]!='?'
            ){
                answerDescription+=' ';
            }
        }


        const date = new Date() , day = date.getDate() , month = date.getMonth() + 1 , year = date.getFullYear();
        // push answer state in question

        const addAnswer = new Answer({
            id : getNewAnswerId(answers),
            questionId : qid,
            description : answerDescription,
            datePosted : `${day}/${month}/${year}`,
            numUpvotes : 0,
            numDownvotes : 0,
        })

        console.log(addAnswer);

        setData(draft => {
            draft[index].answers.push(addAnswer.id);
        });

        setAnswers(draft => {
            draft.push(addAnswer);
        })

        user.answers.push(addAnswer.id);
        updateUser(user);

        return true;


    }

   
    if(inValid){
        return (
            <h2>No such page exists {":("}</h2>
        )
    }

    if(!hydrated) return null;


    return(
       
       <div className={styles.outerWrapper}>
        <main className={styles.main}>
            <div className={styles.title}>
                {questionTitle}
            </div>

            <div>
                {questionDescription}
            </div>

            <div className={styles.inputWrapper}
            onChange = {(e)=>setValue(e.target.value)}
            >
                <textarea className={styles.textarea} placeholder="Your answer goes here...">

                </textarea>
            </div>

            <SubmitButton handleSubmit={handleSubmit} successMessage={"Yeah! Answer posted"} name = {"POST ANSWER"}/>

        </main>
        </div> 
    )

}