import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';



export default function QuestionCardTitle({question , setQuestion , title}){



    const targetRef = useRef();
    function handleChange(event){
        const text = event.target.value;
        
        console.log("text ", text);

            //setQuestion
            setQuestion({...question , 
            title : text
            });
        
    }


    return (
        <div className={styles.titleWrapper}>
           
            <div className={styles.labelWrapper}>
            <label for="questionCardTitle" className={styles.label}>
               Title:
            </label>
            </div>


            
            <textarea 
            ref = {targetRef}
            onChange={handleChange}
             value = {title}
            placeholder='Enter a title' className={styles.textarea} type = "text" id = "questionCardTitle" />
          
           
        </div>
    );
}