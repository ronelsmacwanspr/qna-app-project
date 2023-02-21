import styles from './styles.module.css';
import { useEffect , useState , useRef} from 'react';
import { generateText } from '@/utils';

export default function AnswerDescription({answerDescription  , limit}){

    const targetRef = useRef();
    const [description , setDescription] = useState(answerDescription);

    

    let resizeTimer = null;

    function handleWindowResize(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout( () => setDescription(generateText(targetRef , answerDescription)), limit);
    }

    useEffect(()=>{
        if(!description) return;

        
       setDescription(generateText(targetRef , answerDescription)); // set text for first render
       
       
       window.addEventListener('resize' , handleWindowResize);

       return ()=>{
        window.removeEventListener('resize' , handleWindowResize);
       }
    },[answerDescription]);

    const displayText = (!description ? 'No answers yet..' : description);

    return (
        <div  ref = {targetRef} className={styles.answerDescription}>
            {displayText}
        </div>
    )
}