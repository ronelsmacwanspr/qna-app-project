import styles from "./styles.module.css"
import FeedHeader from '@/components/screens/homeScreen/qnaFeed/feedHeader'
import QnAFeed from '@/components/screens/homeScreen/qnaFeed'
import { getUser } from "@/utils";
import { useEffect, useState } from "react";

export default function HomeScreen() {

  const [hydrated,setHydrated] = useState(false);

   useEffect(()=>{
    setHydrated(true);
   },[hydrated]);

   if(!hydrated) return null;
   
  return (
    
    <div>
      <FeedHeader />
     
     <main>
      <div className={styles.mainFeed}>
        <QnAFeed/>
      </div>
     
      </main>
      </div>
    
  )
}
