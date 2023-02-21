import CategoryButton from "./categoryButton/CategoryButton";
import styles from "./styles.module.css";

export default function QuestionCardCategories({question , setQuestion , categories}){
    
    function handleAddCategory(event){
            let inputCategory = prompt("Please Enter a category" , '');

            if(inputCategory)
            inputCategory = inputCategory.trim();

            if(!inputCategory) {
                alert('Please enter non-empty category!')    
                return false;
            }

            inputCategory = inputCategory.toLowerCase();
            // check if already present in categories?

            if(categories.includes(inputCategory)){
                alert('Category already exists');
                return false;
            }

            // setQuestion

            setQuestion({
                ...question,
                categories: categories.concat(inputCategory)
            })


    }
    
    const defaultDiv = (<div className={styles.defaultDiv}>
        No categories selected yet.
    </div>);
    
    let categoriesArray = [];
        // Add categories in div

    categories.forEach((category , index) => {
        categoriesArray.push(
            <CategoryButton question = {question} setQuestion={setQuestion} name = {category} index = {index} key={index}/>
        )
    })

    const renderDiv = ((!categories || categories.length==0) ? defaultDiv : categoriesArray);

    

    return (
        <div className={styles.categoriesWrapper}>
            <label className={styles.label}> Categories </label>
            <div className={ styles.categories }>
            <div className= {styles.renderDiv}>
            {renderDiv}
            </div>
            <button className={styles.addButton}
            onClick = {handleAddCategory}
            >
                Add Category
            </button>
            </div>

        </div>
    );
   
}