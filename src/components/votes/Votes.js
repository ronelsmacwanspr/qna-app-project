import styles from './styles.module.css';
import { useDataContext } from '@/context/dataContext';
// import { useUserContext } from '@/context/userContext';
// import { useUserLocalStorage } from '@/useLocalStorage/useUserLocalStorage';
import { useEffect, useState } from 'react';
import { getUser, updateUser } from '@/utils';
export default function Votes({answer , index}){
 // make selected as state
    
  

   const [data,setData] = useDataContext();
  //  const [user , setUser] = useUserContext();

   //const [user , setUser] = useUserLocalStorage();

   let user = getUser();


   console.log('user  in Votes ', user);

   //console.log('in local storage user is ' , typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null);
   if( !answer) return null;
   
   const [selected, setSelected] = useState(()=>{

    if(!user){
        return null;
    }


    if(user.upvotedAnswers.includes(answer.id)){
        return 'upvote';
    }
    else if(user.downvotedAnswers.includes(answer.id)){
        return 'downvote';
    } 
     return null;
    
});

   

   console.log('user---',user);

   console.log('selecetd is' , selected);

    let upvoteClassName = (selected == 'upvote' ? 'upvoteSelected' : 'upvote');
    let downvoteClassName = (selected == 'downvote' ? 'downvoteSelected' : 'downvote');



    console.log('classNames ', upvoteClassName , downvoteClassName);

        function handleUpvoteClick(){  
            
            user = getUser();
            if(selected == 'upvote'){
              

                setData((draft) => {
                        draft[index].answers.forEach((item , _index)=>{
                             if(item.id == answer.id){
                        
                                 draft[index].answers[_index].numUpvotes--;
                            }
                });

                });

              

                    const idx = user.upvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    user.upvotedAnswers.splice(idx , 1);
                    updateUser(user);

                

                setSelected(null);

                
            }
            else{
                

                setData((draft) => {
                       draft[index].answers.forEach((item , _index)=>{
                        if(item.id == answer.id){
                            
                            draft[index].answers[_index].numUpvotes++;
                        }
                    });

                 
                });

             

                //user.upvotedAnswers.push(answer.id);
                user = {
                    ...user ,
                    upvotedAnswers : [...user.upvotedAnswers , answer.id]
                }
                updateUser(user);

                if(selected == 'downvote'){
               

                    setData(draft => {
                        draft[index].answers.forEach((item , _index)=>{
                            if(item.id == answer.id){
                                
                                draft[index].answers[_index].numDownvotes--;
                            }
                        });
                      
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
                    draft[index].answers.forEach((item , _index)=>{
                        if(item.id == answer.id){
                            
                            draft[index].answers[_index].numDownvotes--;
                        }
                    });
                 
                })


                const idx = user.downvotedAnswers.indexOf(answer.id);
                console.assert(idx>=0);
                user.downvotedAnswers.splice(idx , 1);
                updateUser(user);



             setSelected(null);
            }

                else {
            
                setData(draft => {
                    draft[index].answers.forEach((item , _index)=>{
                        if(item.id == answer.id){
                            
                            draft[index].answers[_index].numDownvotes++;
                        }
                    });
                  
                })

              //user.downvotedAnswers.push(answer.id);
              user = {
                ...user,
                downvotedAnswers : [...user.downvotedAnswers , answer.id]
              }
              updateUser(user);

                if(selected == 'upvote'){
               
                    setData(draft => {
                        draft[index].answers.forEach((item , _index)=>{
                            if(item.id == answer.id){
                                
                              draft[index].answers[_index].numUpvotes--;
                            }
                        });
                     
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
                    {(answer ? answer.numUpvotes : 0)}
                </span>
                <button className={getButtonStyle('downvote')} 
                onClick = {(e)=>handleDownvoteClick(e)}
               
                >Downvote</button>
                <span className={styles.count}>
                {(answer ? answer.numDownvotes : 0)}
                </span>
            </div>
        )

}
        