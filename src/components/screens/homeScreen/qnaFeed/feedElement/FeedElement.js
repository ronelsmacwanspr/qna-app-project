import styles from './styles.module.css';
import QuestionTitle from './questionTitle';
import QuestionDescription from './questionDescription';
import  AnswerDescription  from './answerDescription';
import Votes from '../../../../votes';
import Link from 'next/link'; 
import React from 'react';
import { dummyAnswers } from '@/data';
import { getAnswerWithId } from '@/utils';
import { useLocalStorage } from '@/localStorage/localStorage';


function FeedElement({question , index , setData}){
    
    const [answers , setAnswers] = useLocalStorage(STATE_KEYS.answers, dummyAnswers);
   
    const answer = (question.answers.length == 0 ? null : getAnswerWithId(answers,'a-0')),
     answerDescription = (question.answers.length == 0 ? null : answer.description),
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