import styles from './styles.module.css';

export default function QuestionDescription({questionDescription , limit}){


    return (
        <>
        <div className={styles.questionDescription}>
            {questionDescription}    
        </div>
        <hr className={styles.line}/>
       </>
    )
}