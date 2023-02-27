// this file will render feedElements in flexbox



import FeedElement from "./feedElement";
import styles from './styles.module.css';
import { useDataContext } from "@/context/dataContext";


export default function QnAFeed(){
    let feed = [];
    
   const [data,setData] = useDataContext();
   console.log("data",data);
  
   data.forEach((question , index) => {
    feed.push(
        <FeedElement question = {question} index = {index} key={question.id} />

    );
})
   
    return (
        <div className={styles.qnaFeedWrapper}>
            {feed}
        </div>
    )

}