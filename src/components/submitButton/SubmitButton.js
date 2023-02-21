import styles from "./styles.module.css";

export default function SubmitButton({handleSubmit , successMessage , name}){

    return(
      
        <button className={styles.button} type = "submit" onClick = {()=>{
            const success = handleSubmit();
            if(success){
                alert(successMessage);
            }
        }}>
            {name}
        </button>
      
    )
}
