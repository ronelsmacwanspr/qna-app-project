import Votes from "../votes";
import styles from './styles.module.css';
import React from 'react';
 function AnswerCard({question, answer , answerIndex, index , setData}){
       console.log("question ", question);
        return(
            <div className={styles.answerCardWrapper}>
                
                <div>
                    <div>
                        {answer.description}
                    </div>
              
                
                <Votes  answer={answer} answerIndex = {answerIndex} index = {index} setData={setData}/>

                </div>
                
            </div>
        );
}

export default React.memo(AnswerCard);