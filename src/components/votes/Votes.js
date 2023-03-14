import styles from './styles.module.css';
import {  useState } from 'react';
import { getUser, updateUser } from '@/utils';
import { VOTE_ACTIONS as actions } from '@/constants';

export default function Votes({   answer , answerIndex ,index , setData}){
 // make selected as state
    
  

  
   let user = getUser();


   //console.log('user  in Votes ', user);

   //console.log('in local storage user is ' , typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null);
   
   
   const [selected, setSelected] = useState(()=>{

    if(!user || !answer){
        return null;
    }


    if(user.upvotedAnswers.includes(answer?.id)){
        return actions.upvote;
    }
    else if(user.downvotedAnswers.includes(answer?.id)){
        return actions.downvote;
    } 
     return null;
    
});

   

 //  console.log('data-->',data);
   console.log('user-->',user);

   if(!answer){
    return null;
   }

  // console.log('selecetd is' , selected);



    let upvoteClassName = (selected == actions.upvote ? 'upvoteSelected' : 'upvote');
    let downvoteClassName = (selected == actions.downvote ? 'downvoteSelected' : 'downvote');

    console.log('answerIndex ', answerIndex);
    console.log('index ', index);
    const upvoteCount = (answerIndex!==null ? answer.numUpvotes : 0) , 
          downvoteCount = (answerIndex!==null ? answer.numDownvotes : 0);

    console.log('classNames ', upvoteClassName , downvoteClassName);

        function handleUpvoteClick(){  
            
            user = getUser();
            if(selected == actions.upvote){
              

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

                if(selected == actions.downvote){
               
                    setData(draft => {
                        draft[index].answers[answerIndex].numDownvotes--;
                    })
    
                   

                 const idx = user.downvotedAnswers.indexOf(answer.id);
                     console.assert(idx>=0);
                    user.downvotedAnswers.splice(idx , 1);
                    updateUser(user);
                   
                

                
                }
                setSelected(actions.upvote);
            }

           
        }

        function handleDownvoteClick(){

            user = getUser();


            if(selected == actions.downvote){
    
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

                if(selected == actions.upvote){
               
                    setData(draft => {
                        draft[index].answers[answerIndex].numUpvotes--;
                    })

                

                    const idx = user.upvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    user.upvotedAnswers.splice(idx , 1);
                    updateUser(user);

                }

               
                setSelected(actions.downvote);
            }
        

           
        }

        function getButtonStyle(type){
            if(type == actions.upvote){
                if(selected == type){
                    return styles.upvoteSelected;
                }
                return styles.upvote;
            }

            if(selected == actions.downvote){
                return styles.downvoteSelected;
            }
            return styles.downvote;
        }

    

        return (
            <div className={styles.voteWrapper}>
                <button className={getButtonStyle(actions.upvote)}
                onClick = {(e)=>handleUpvoteClick(e)}
                
                >Upvote</button>
                <span className={styles.count}>
                    {upvoteCount}
                </span>
                <button className={getButtonStyle(actions.downvote)} 
                onClick = {(e)=>handleDownvoteClick(e)}
               
                >Downvote</button>
                <span className={styles.count}>
                {downvoteCount}
                </span>
            </div>
        )

}
        