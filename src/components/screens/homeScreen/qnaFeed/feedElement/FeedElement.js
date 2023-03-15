import styles from './styles.module.css';
import QuestionTitle from './questionTitle';
import QuestionDescription from './questionDescription';
import  AnswerDescription  from './answerDescription';
import Votes from '../../../../votes';
import Link from 'next/link'; 
import React from 'react';



function FeedElement({question , answer , setAnswers}){
    
   
    if(question.answers.length){
        console.log(question.answers[0]);
    }
   
    const answerDescription = (question.answers.length == 0 ? null : answer.description),
     questionDescription = (!question.description ? null : question.description);


   
    const location = `/q/${question.id}`;

   

    
    return (
       
        <div className={styles.feedElement}>
        <Link href = {location}>
        <QuestionTitle questionTitle={question.title}/>
        </Link>

        <QuestionDescription questionDescription={questionDescription} 
         />

        <AnswerDescription answerDescription={answerDescription}/>
        <Votes  answer = {answer} setAnswers = {setAnswers}/>

        </div>
        
    )
}

export default React.memo(FeedElement);