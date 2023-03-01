import Votes from "../votes";
import styles from './styles.module.css';

export default function AnswerCard({answer , answerIndex, index , data , setData}){
        return(
            <div className={styles.answerCardWrapper}>
                
                <div>
                    <div>
                        {answer.description}
                    </div>
              
                
                <Votes answer={answer} answerIndex = {answerIndex} index = {index} data = {data} setData={setData}/>

                </div>
                
            </div>
        );
}