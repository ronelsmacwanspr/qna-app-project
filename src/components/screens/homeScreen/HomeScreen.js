import styles from "./styles.module.css"
import FeedHeader from '@/components/screens/homeScreen/qnaFeed/feedHeader'
import QnAFeed from '@/components/screens/homeScreen/qnaFeed'
import { useRouter } from "next/router";
//import { useUserLocalStorage } from "@/useLocalStorage/useUserLocalStorage";
import { useEffect, useState } from "react";
//import { useUserContext } from "@/context/userContext";

export default function HomeScreen() {

  //const [user,setUser] = useUserLocalStorage();
  //const [user,setUser] = useUserContext();

  let user = (typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('user')) : null);
 
   const router = useRouter();

   console.log("user " , user );

   useEffect(()=>{
    if(!user && router.isReady){
      router.push("/userLogin");
     }
   } , [router.isReady]);


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
