import styles from './styles.module.css';

const CHAR_LIMIT = 100;

export default function QuestionCardTitle({question , setQuestion , title}){

    
    function handleChange(event){
        const text = event.target.value;
        if(text.length > CHAR_LIMIT){
            //show error
            alert('Please enter atmost 100 words!');
        } else {
            //setQuestion
            setQuestion({...question , 
            title : text
            })
        }
    }

    return (
        <div className={styles.titleWrapper}>
           
            <div className={styles.labelWrapper}>
            <label for="questionCardTitle" className={styles.label}>
               Title:
            </label>
            </div>


            
            <textarea 
            onChange={handleChange}
            value = {title}
            placeholder='Enter a title' className={styles.textarea} type = "text" id = "questionCardTitle" />
          
           
        </div>
    );
}