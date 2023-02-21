import styles from "./styles.module.css"
import FeedHeader from '@/components/screens/homeScreen/qnaFeed/feedHeader'
import QnAFeed from '@/components/screens/homeScreen/qnaFeed'


export default function HomeScreen() {
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
