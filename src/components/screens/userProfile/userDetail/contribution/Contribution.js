//import { useUserContext } from "@/context/userContext";
import { useDataContext } from "@/context/dataContext";
import Link from "next/link";

import styles from './styles.module.css';
import { getUser , updateUser } from "@/utils";

const TYPE_STYLE = {
    questions : 'Questions',
    answers   : 'Answers',
}

export default function Contribution({type}){
    //const [user,setUser] = useUserContext();
    const [data , setData] = useDataContext();
    let user = getUser();

    console.log('user in contribution is ' , user);
    if(!user){
        return ;
    }

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
        //value is string 'a-23' , 'q-35' etc
        
        // console.log("value " , value);
        // console.log("str" , str);
        
        let index = Number(value.slice(2));
        
        if(type == 'answers'){
            for(const question of data){
                for(const answer of question.answers){
                    if(answer.id == value){
                        index = Number(question.id.slice(2));
                        break;
                    }
                }
            }
        }
        const qid = `q-${index}`;
        let str = getValue(type , value);


        
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