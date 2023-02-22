// this file will render feedElements in flexbox



import FeedElement from "./feedElement";
import styles from './styles.module.css';
import { useDataContext } from "@/context/dataContext";
import { useUserContext } from "@/context/userContext";

export default function QnAFeed(){
    let feed = [];
    
   const [data,setData] = useDataContext();
   const [user,setUser] = useUserContext();


  console.log("data" , data);
   console.log("user " , user );
    

    let cnt = 0;
    for(let question of data){
        feed.push(
            <FeedElement question = {question} index = {cnt} key={cnt} />

        );
        ++cnt;
    }

    return (
        <div className={styles.qnaFeedWrapper}>
            {feed}
        </div>
    )

}