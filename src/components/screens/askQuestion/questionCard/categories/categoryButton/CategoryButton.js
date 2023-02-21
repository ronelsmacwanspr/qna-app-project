import styles from "./styles.module.css";

export default function CategoryButton({ question , setQuestion, name , index}){

    function handleRemove(event){

        const categories = question.categories;
        const numCategories = categories.length;
        const newCategories =  categories.filter((item,_index)=>index!=_index);

        console.log("newCategries " , newCategories);

        setQuestion({
            ...question,
            categories : newCategories
        })
    }

    return(
        <div className={styles.wrapper}>
            {name}
            <button className={styles.button}
            onClick = {handleRemove}
            >
                -
            </button>
        </div>
    )
}