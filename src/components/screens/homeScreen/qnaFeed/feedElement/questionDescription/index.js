import styles from './styles.module.css';
import { useState , useEffect, useRef } from 'react';
import { generateText } from '@/utils';

export default function QuestionDescription({questionDescription , limit}){

    
    const targetRef = useRef();
    const [description , setDescription] = useState(questionDescription);

    let resizeTimer = null;

    function handleWindowResize(){
             clearTimeout(resizeTimer);
             resizeTimer = setTimeout( () => setDescription(generateText(targetRef , questionDescription)), limit);
    }

    useEffect(()=>{
        if(!description) return;
        
        setDescription(generateText(targetRef , questionDescription));

        window.addEventListener('resize' , handleWindowResize);

        return ()=>{
            window.removeEventListener('resize' , handleWindowResize);
        }
        
    }, [questionDescription]);

    const displayText = (!questionDescription ? `No description available` : description);

    return (
        <>
        <div ref = {targetRef} className={styles.questionDescription}>
            {displayText}    
        </div>
        <hr className={styles.line}/>
       </>
    )
}