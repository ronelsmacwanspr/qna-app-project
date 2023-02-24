// this file will render feedElements in flexbox



import FeedElement from "./feedElement";
import styles from './styles.module.css';
import { useDataContext } from "@/context/dataContext";
import {  getLocalStorageValue} from "@/useLocalStorage/useUserLocalStorage";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function QnAFeed(){
    let feed = [];
    
   const [data,setData] = useDataContext();
   //const [user,setUser] = useUserLocalStorage();

   const user = getLocalStorageValue();


   const router = useRouter();

   console.log("user " , user );

   useEffect(()=>{
    if(!user && router.isReady){
        router.push("/userLogin");
    }
   },[router.isReady , user]);
  


  //console.log("data" , data);
  
    
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