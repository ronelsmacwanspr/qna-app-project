// maintain state here
import QuestionCardDescription from './description';
import styles from './styles.module.css';
import QuestionCardTitle from './title';
import QuestionCardCategories from './categories';
import {  useState } from 'react';
import { Question } from '@/globalClasses/Question';
import SubmitButton from '../../../submitButton/SubmitButton';
import { useDataContext } from '@/context/dataContext';
import { useUserContext } from '@/context/userContext';
const TITLE_CHAR_LIMIT = 300;

export default function QuestionCard(){

    const [question , setQuestion] = useState(new Question({}));
    const [data , setData] = useDataContext();
    const [user , setUser] = useUserContext();

    console.log("user IN", user);

    //console.log("ques-> ",question);

    function handleSubmit(e){
        // run validations!
        
        // Title validation
        let titleArray = question?.title?.split(' ').filter((item)=>item!='');
        let title = "";

        for(let i=0;titleArray && i<titleArray.length;++i){
            title+=titleArray[i];
            if(i != titleArray.length-1 && titleArray[i+1]!=',' && titleArray[i+1]!='.' && titleArray[i+1]!='!'  
            && titleArray[i+1]!=';' && titleArray[i+1]!='?') title+=' ';
        }

    
        console.log("title ", title);
        
        if(!title || title==='' || title.trim()==''){
            alert(`Title cannot be empty!`);
            return false;
        }
        else if( title.length>TITLE_CHAR_LIMIT){
            alert(`Can't have more than ${TITLE_CHAR_LIMIT} words for title!`); // TODO : Error Styles
            return false;
        }

        // description Validation
        let descriptionArray = question?.description?.split(' ').filter(item => item!='');
        let description = "";

        for(let i=0; descriptionArray && i<descriptionArray.length;++i){
                description+=descriptionArray[i];
                if(i!=descriptionArray.length-1) description+=' ';
        }   
        
        
        

        // categories Validation
        // already done in category Component
        const categories = question.categories;

        // create ID
        const id = `q-${data.length}`;
        const date = new Date();
        const datePosted = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const userId = user.id;

        const answers = [];
        const _question = new Question({ id : id , userId : userId, datePosted : datePosted , title : title,
            description : description, categories : categories , answers : answers
        });

        // check if user has already asked exactly same ques

        console.log("asked similar func is ", user.hasAskedSimilar);
        if(user.hasAskedSimilar(_question)){
                alert('You have already asked the same question!');
                return false;
        }

       
        console.log("question ", _question);
        // setData([...data,
        //       _question
        // ]); // append ques

        // using immer

        setData((draft) => {
            draft.push(_question);
        });
        
       
        // const userQuestions = clone(user.questions);
        // userQuestions.add(_question);

        // setUser({
        //     ...user,
        //     questions : userQuestions
        // });

        setUser((draft) => {
            draft.questions.add(_question);
        })
        return true;

    }

    return (
        <main className={styles.main}>
        <div className={styles.questionCardWrapper}>
        <QuestionCardTitle  question={question} setQuestion={setQuestion} title = {question.title}/>
        <QuestionCardDescription question = {question} setQuestion={setQuestion} description = {question.description} />
        <QuestionCardCategories question = {question} setQuestion={setQuestion} categories={question.categories}/>
        <SubmitButton handleSubmit = {handleSubmit} successMessage = {"Question Posted Successfully!"}
         name = {"POST QUESTION"}
        />
        </div>
        </main>
    );
}
