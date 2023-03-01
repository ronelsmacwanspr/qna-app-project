import styles from './styles.module.css';
import { useLocalStorage } from '@/useLocalStorage/localStorage';
import {  useState } from 'react';
import { getUser, updateUser } from '@/utils';
import { STATE_KEYS } from '@/constants';
import { dummyQuestions } from '@/data';


export default function Votes({answer , answerIndex ,index, data , setData}){
 // make selected as state
    
  

  
   let user = getUser();


   console.log('user  in Votes ', user);

   //console.log('in local storage user is ' , typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null);
   
   
   const [selected, setSelected] = useState(()=>{

    if(!user || !answer){
        return null;
    }


    if(user.upvotedAnswers.includes(answer?.id)){
        return 'upvote';
    }
    else if(user.downvotedAnswers.includes(answer?.id)){
        return 'downvote';
    } 
     return null;
    
});

   

   console.log('data-->',data);
   console.log('user-->',user);

   if(!data || !answer){
    return null;
   }

   console.log('selecetd is' , selected);



    let upvoteClassName = (selected == 'upvote' ? 'upvoteSelected' : 'upvote');
    let downvoteClassName = (selected == 'downvote' ? 'downvoteSelected' : 'downvote');

    console.log('answerIndex ', answerIndex);
    console.log('index ', index);
    const upvoteCount = (answerIndex!==null ? data[index].answers[answerIndex].numUpvotes : 0) , 
          downvoteCount = (answerIndex!==null ? data[index].answers[answerIndex].numDownvotes : 0);

    console.log('classNames ', upvoteClassName , downvoteClassName);

        function handleUpvoteClick(){  
            
            user = getUser();
            if(selected == 'upvote'){
              

                    setData(draft => {
                        draft[index].answers[answerIndex].numUpvotes--;
                    });
              

                    const idx = user.upvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    user.upvotedAnswers.splice(idx , 1);
                    updateUser(user);

                

                setSelected(null);

                
            }
            else{
                

                setData(draft => {
                    draft[index].answers[answerIndex].numUpvotes++;
                })

                user = {
                    ...user ,
                    upvotedAnswers : [...user.upvotedAnswers , answer.id]
                }
                updateUser(user);

                if(selected == 'downvote'){
               
                    setData(draft => {
                        draft[index].answers[answerIndex].numDownvotes--;
                    })
    
                   

                 const idx = user.downvotedAnswers.indexOf(answer.id);
                     console.assert(idx>=0);
                    user.downvotedAnswers.splice(idx , 1);
                    updateUser(user);
                   
                

                
                }
                setSelected('upvote');
            }

           
        }

        function handleDownvoteClick(){

            user = getUser();


            if(selected == 'downvote'){
    
                setData(draft => {
                    draft[index].answers[answerIndex].numDownvotes--;
                })


                const idx = user.downvotedAnswers.indexOf(answer.id);
                console.assert(idx>=0);
                user.downvotedAnswers.splice(idx , 1);
                updateUser(user);



             setSelected(null);
            }

                else {
            
                setData(draft => {
                    draft[index].answers[answerIndex].numDownvotes++;
                })

              //user.downvotedAnswers.push(answer.id);
              user = {
                ...user,
                downvotedAnswers : [...user.downvotedAnswers , answer.id]
              }
              updateUser(user);

                if(selected == 'upvote'){
               
                    setData(draft => {
                        draft[index].answers[answerIndex].numUpvotes--;
                    })

                

                    const idx = user.upvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    user.upvotedAnswers.splice(idx , 1);
                    updateUser(user);

                }

               
                setSelected('downvote');
            }
        

           
        }

        function getButtonStyle(type){
            if(type == 'upvote'){
                if(selected == 'upvote'){
                    return styles.upvoteSelected;
                }
                return styles.upvote;
            }

            if(selected == 'downvote'){
                return styles.downvoteSelected;
            }
            return styles.downvote;
        }

    

        return (
            <div className={styles.voteWrapper}>
                <button className={getButtonStyle('upvote')}
                onClick = {(e)=>handleUpvoteClick(e)}
                
                >Upvote</button>
                <span className={styles.count}>
                    {upvoteCount}
                </span>
                <button className={getButtonStyle('downvote')} 
                onClick = {(e)=>handleDownvoteClick(e)}
               
                >Downvote</button>
                <span className={styles.count}>
                {downvoteCount}
                </span>
            </div>
        )

}
        