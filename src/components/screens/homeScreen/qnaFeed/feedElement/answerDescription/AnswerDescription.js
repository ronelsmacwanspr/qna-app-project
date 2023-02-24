import styles from './styles.module.css';
import { useEffect , useState , useRef} from 'react';
import { generateText } from '@/utils';

export default function AnswerDescription({answerDescription  , limit}){


    return (
        <div className={styles.answerDescription}>
            {(answerDescription || 'No answers yet...') }
        </div>
    )
}