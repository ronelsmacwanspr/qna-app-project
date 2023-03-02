// this file will render feedElements in flexbox



import FeedElement from "./feedElement";
import styles from './styles.module.css';
import { useLocalStorage } from "@/useLocalStorage/localStorage";
import { STATE_KEYS } from "@/constants";
import { dummyQuestions } from "@/data";

export default function QnAFeed(){
    let feed = [];
    
   const [data,setData] = useLocalStorage(STATE_KEYS.data , dummyQuestions);

   console.log("data",data);

   if(!data){
    return null;
   }
  
   data.forEach((question , index) => {
    feed.push(
        <FeedElement question = {question} index = {index} key={question.id} setData = {setData}/>

    );
})
   
    return (
        <div className={styles.qnaFeedWrapper}>
            {feed}
        </div>
    )

}