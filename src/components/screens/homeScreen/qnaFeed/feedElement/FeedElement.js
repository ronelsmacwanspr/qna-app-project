import styles from './styles.module.css';
import QuestionTitle from './questionTitle';
import QuestionDescription from './questionDescription';
import  AnswerDescription  from './answerDescription';
import Votes from '../../../../votes';
import Link from 'next/link'; 

const RESIZE_TIME_LIMIT = {
    questionTitle : 150,
    questionDescription : 150,
    answerDescription : 150
};

export default function FeedElement({question , index}){
    
   
    const answerDescription = (question.answers.length == 0 ? null : question.answers[0].description);
    const answer = (question.answers.length == 0 ? null : question.answers[0]);
    const questionDescription = (!question.description ? null : question.description);


   
    const location = `/q/${question.id}`
    return (
       
        <div className={styles.feedElement}>
        <Link href = {location}>
        <QuestionTitle questionTitle={question.title}   limit = {RESIZE_TIME_LIMIT.questionTitle}/>
        </Link>

        <QuestionDescription questionDescription={questionDescription} 
         limit={RESIZE_TIME_LIMIT.questionDescription}/>

        <AnswerDescription answerDescription={answerDescription}
                            limit = {RESIZE_TIME_LIMIT.answerDescription}
                            />
        <Votes answer = {answer} index = {index}/>

        </div>
        
    )
}