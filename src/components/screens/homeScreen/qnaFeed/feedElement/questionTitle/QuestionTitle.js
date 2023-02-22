// title of question , give  32% height
import styles from './styles.module.css';
import { generateText } from '@/utils';
import { useEffect, useState, useRef } from 'react';

export default function QuestionTitle({questionTitle , limit}){
    const targetRef = useRef();
    const [title,setTitle] = useState(questionTitle);

    let resizeTimer = null;


    function handleWindowResize(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout( () => setTitle(generateText(targetRef , questionTitle)), limit);
    }

    useEffect(()=>{
        console.assert(title!=null);
        setTitle(generateText(targetRef , questionTitle));

       
       window.addEventListener('resize' , handleWindowResize);

       return ()=>{
        window.removeEventListener('resize' , handleWindowResize);
       }

    } , [questionTitle]);


    return (
        <div ref = {targetRef} className={styles.questionTitle}>
            {title}
        </div>
    )
}