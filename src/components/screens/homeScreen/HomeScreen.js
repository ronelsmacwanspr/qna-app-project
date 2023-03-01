import styles from "./styles.module.css"
import FeedHeader from '@/components/screens/homeScreen/qnaFeed/feedHeader'
import QnAFeed from '@/components/screens/homeScreen/qnaFeed'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUser } from "@/utils";
import { useLocalStorage } from "@/useLocalStorage/localStorage";
import { STATE_KEYS } from "@/constants";
import { dummyQuestions } from "@/data";

export default function HomeScreen() {

  let user = getUser();
 const [data , setData] = useLocalStorage(STATE_KEYS.data , dummyQuestions);
 
   const router = useRouter();

   //console.log("user " , user );
   console.log("data " , data);

   useEffect(()=>{
    if(!user && router.isReady){
      router.push("/userLogin");
     }
   } , [router.isReady]);

   if(!data) return null;


  return (
    <>
     <main>
      <FeedHeader />
     
      <div className={styles.mainFeed}>
        <QnAFeed/>
      </div>
     
      </main>
    </>
  )
}
