import { useUserContext } from "@/context/userContext";
import { useDataContext } from "@/context/dataContext";
import Link from "next/link";

import styles from './styles.module.css';

const TYPE_STYLE = {
    questions : 'Questions',
    answers   : 'Answers',
}

export default function Contribution({type}){
    const [user,setUser] = useUserContext();
    const [data , setData] = useDataContext();


    const values = [];


    function getValue(query , id){

        let result = null;
        if(query == 'questions'){
            for(const question of data){
                if(question.id == id){
                    result = question.title;
                    break;
                }
            }
        } else {
            console.assert(query == 'answers');
        
            for(const question of data){
                for(const answer of question.answers){
                    if(answer.id == id){
                        result = answer.description;
                        break;
                    }
                }

                if(result){
                    break;
                }
            }

           
        }

        return result;
    }

    
    let i=0;
    for(const value of user[type]){
        let str = getValue(type , value.id);
        // console.log("value " , value);
        // console.log("str" , str);

        const index = (type == 'questions' ? Number(value.id.slice(2)) : Number(value.questionId.slice(2)));
        const qid = `q-${index}`;


        
        if(i >0){
            str = ', ' + str;
        }
        values.push(
            <Link href={{pathname : '/q/[qid]' , query : {qid : qid}}}>
            <span className={styles.span}>
                
                {str}
                
            </span>
            </Link>
           
           
        )

        ++i;
    }

   

    return (
        <div className={styles.wrapper}>
            <div className={styles.type}>
               <i>{TYPE_STYLE[type]}</i> 
            </div>
            <div className={styles.values}>
                {values.length == 0 ? <span>No {TYPE_STYLE[type]} yet</span> : values}
            </div>
        </div>
    );


}