import { useRouter } from "next/router";
import { useLocalStorage } from "@/localStorage/localStorage";
import AnswerCard from "@/components/answerCard/AnswerCard";
import { useEffect, useState } from "react";
import styles from './styles.module.css';
import HomeButton from "@/components/homeButton";
import { STATE_KEYS } from "@/constants";
import { dummyQuestions } from "@/data";

export default function QuestionLandingPage(){



    const router = useRouter();
    const [data , setData] = useLocalStorage(STATE_KEYS.data , dummyQuestions);
   

 const [qid,setQid] = useState(router?.query?.qid);
   
    let  index= null , question = null , answersToDisplay = [] , questionTitle = 'Wait..', questionDescription = 'Wait...',
         inValid = false;

     console.log("ready-router", router.isReady);

    useEffect(()=>{
        if(router.isReady){
       
        const _qid = router.query.qid;
        setQid(_qid);
        }

    } , [router.isReady]);
   
   if(qid && data){
        if(qid.length < 3 || qid[0]!='q' || qid[1]!='-'){
            inValid = true;
        }
        else{

         index = Number(qid.slice(2));

         console.log("index ", index);


         if(index < data.length){            
            question = data[index];

            questionTitle = question.title;
            
            questionDescription = question.description;
   
             data[index].answers.forEach( (answer , answerIndex) => {
                answersToDisplay.push(
               
                      <AnswerCard key = {answer.id} answer={answer} answerIndex = {answerIndex} 
                      index = {index} setData = {setData}/>)
                    });
            
         } else {
            inValid = true;
         }

        
        
    }
   }


   
    console.log(" query ",  router.query);

   
   // console.log("quees ", question);
   
   if(inValid){
    return (
        <h2>
            No such page exists {":("}
        </h2>
    )
   }

    return (
        <div className={styles.landingPageWrapper}>

        <div className={styles.questionTitleWrapper}>

            <HomeButton />
            <div className={styles.titleText}>
            {questionTitle}
            </div>

        </div>


        <div className={styles.landingPageDescriptionWrapper}>
       
            {questionDescription}

           <hr className={styles.hr}/>

        
        </div>

        
        {
            answersToDisplay
        }

        </div>

    )
    

    
}
