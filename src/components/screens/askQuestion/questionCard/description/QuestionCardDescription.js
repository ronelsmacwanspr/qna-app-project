import styles from "./styles.module.css";

export default function QuestionCardDescription({question , setQuestion , description}){

    function handleChange(event){
        let text = event.target.value;
       
        setQuestion({
            ...question,
            description : text
        })
    }

    return (
        <div className={styles.descriptionWrapper}>
            <div className={styles.labelWrapper}>
           <label className={styles.label} for="questionCardDescription"> Description:</label>
           </div>

           
           <textarea 
           value = {description}
           onChange = {handleChange}
           className = {styles.textarea} id = "questionCardDescription"></textarea> 
          
        </div>
    )
}