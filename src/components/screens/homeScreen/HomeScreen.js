import styles from "./styles.module.css"
import FeedHeader from '@/components/screens/homeScreen/qnaFeed/feedHeader'
import QnAFeed from '@/components/screens/homeScreen/qnaFeed'
import { getUser } from "@/utils";

export default function HomeScreen() {

  let user = getUser();
 
 
   if(!user) return null;


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
