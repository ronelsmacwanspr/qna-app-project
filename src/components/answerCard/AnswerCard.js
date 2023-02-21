import Votes from "../votes";
import styles from './styles.module.css';

export default function AnswerCard({answer , index}){
        return(
            <div className={styles.answerCardWrapper}>
                
                <div>
                    <div>
                        {answer.description}
                    </div>
              
                
                <Votes answer={answer} index = {index} />

                </div>
                
            </div>
        );
}