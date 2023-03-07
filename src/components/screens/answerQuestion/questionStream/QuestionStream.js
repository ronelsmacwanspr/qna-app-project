import { useLocalStorage } from "@/useLocalStorage/localStorage";
import QuestionTitle from "../../homeScreen/qnaFeed/feedElement/questionTitle";
import QuestionDescription from "../../homeScreen/qnaFeed/feedElement/questionDescription";
import AddAnswerButton from "./addAnswerButton";
import Link from "next/link";
import { STATE_KEYS } from "@/constants";
import { dummyQuestions } from "@/data";
import styles from './styles.module.css';

const RESIZE_TIME_LIMIT = {
    questionTitle : 150,
    questionDescription : 150,
}

export default function QuestionStream(){
    const [data , setData] = useLocalStorage(STATE_KEYS.data , dummyQuestions);

    if(!data){
        return null;
    }

    let render = [];

    for(const question of data){

        const numAnswers = question.answers.length;

        const questionPageUrl = `/q/${question.id}`;


        render.push(
           
            <div key = {question.id} className = {styles.streamCard}>
                <div className={styles.left}>
                <QuestionTitle questionTitle = {question.title} />
                <QuestionDescription questionDescription = {question.description}/>

                <Link href={questionPageUrl}>
                <span>
                {numAnswers} answers 
                </span>
                </Link>
                </div>

                <AddAnswerButton qid = {question.id}/>
            </div>
        );
    }

    return (
        <main className={styles.main}>
            {render}
        </main>
    )
}