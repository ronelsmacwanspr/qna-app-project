import { useLocalStorage } from "@/useLocalStorage/localStorage";
import Link from "next/link";

import styles from './styles.module.css';
import { getUser } from "@/utils";
import { STATE_KEYS , UserKeys , USER_PROFILE_FIELDS} from "@/constants";
import { dummyQuestions } from "@/data";


export default function Contribution({type}){
    const [data , setData] = useLocalStorage(STATE_KEYS.data , dummyQuestions);
    let user = getUser();

    console.log('user in contribution is ' , user);
    if(!user || !data){
        return ;
    }

    const values = [];


    function getValue(query , id){

        let result = null;
        if(query == UserKeys.questions){
            for(const question of data){
                if(question.id == id){
                    result = question.title;
                    break;
                }
            }
        } else {
            console.assert(query == UserKeys.answers);
        
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
        
        
        let index = Number(value.slice(2));
        
        if(type == UserKeys.answers){
            let found = false;
            for(const question of data){
                for(const answer of question.answers){
                    if(answer.id == value){
                        index = Number(question.id.slice(2));
                        found = true;
                        break;
                    }
                }

                if(found) break;
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
               <i>{USER_PROFILE_FIELDS.keysLabel[type]}</i> 
            </div>
            <div className={styles.values}>
                {values.length == 0 ? <span>No {USER_PROFILE_FIELDS.keysLabel[type]} yet</span> : values}
            </div>
        </div>
    );


}