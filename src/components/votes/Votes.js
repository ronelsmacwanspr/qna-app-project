import styles from './styles.module.css';
import { useDataContext } from '@/context/dataContext';
import { useUserContext } from '@/context/userContext';
import { useUserLocalStorage } from '@/useLocalStorage/useUserLocalStorage';
import { useEffect, useState } from 'react';


export default function Votes({answer , index}){
 // make selected as state
    
  

   const [data,setData] = useDataContext();
    const [user , setUser] = useUserContext();

   //const [user , setUser] = useUserLocalStorage();

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

        const [hydrated, setHydrated] = useState(false);
        useEffect(() => {
            setHydrated(true);
        }, []);

        if (!hydrated) {
            // Returns null on first render, so the client and server match
            return null;
        }


    if( !answer) return null;

   console.log('user---',user);

   console.log('selecetd is' , selected);


    //let selected = null;
     
    // if(user.upvotedAnswers.includes(answer.id)){
    //     selected = 'upvote';
    // } else if(user.downvotedAnswers.includes(answer.id)){
    //     selected = 'downvote';
    // }

    let upvoteClassName = (selected == 'upvote' ? 'upvoteSelected' : 'upvote');
    let downvoteClassName = (selected == 'downvote' ? 'downvoteSelected' : 'downvote');


        function handleUpvoteClick(){   
            if(selected == 'upvote'){
              

                setData((draft) => {
                        draft[index].answers.forEach((item , _index)=>{
                             if(item.id == answer.id){
                        
                                 draft[index].answers[_index].numUpvotes--;
                            }
                });

                });

                // setUser((draft) => {
                //     draft.upvotedAnswers.delete(answer.id);
                   
                // })

                // setUser(draft=>{
                //     draft.upvotedAnswers = draft.upvotedAnswers.filter(item => item.id!=answer.id);
                // })

                setUser(draft => {
                    const idx = draft.upvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    draft.upvotedAnswers.splice(idx , 1);
                 })

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

               // setUser(draft => {draft.upvotedAnswers.add(answer.id)});

                setUser(draft => {
                    draft.upvotedAnswers.push(answer.id);
                });

                if(selected == 'downvote'){
               

                    setData(draft => {
                        draft[index].answers.forEach((item , _index)=>{
                            if(item.id == answer.id){
                                
                                draft[index].answers[_index].numDownvotes--;
                            }
                        });
                      
                    })
    
                   
                 
                   //setUser(draft => {draft.downvotedAnswers.delete(answer.id)});

                  // setUser(draft => {draft.downvotedAnswers = draft.downvotedAnswers.filter(item => item.id!=answer.id)})
                   setUser(draft => {
                    const idx = draft.downvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    draft.downvotedAnswers.splice(idx , 1);
                 })

                   
                }

                setSelected('upvote');
            }

           
        }

        function handleDownvoteClick(){
            if(selected == 'downvote'){
          
                setData(draft => {
                    draft[index].answers.forEach((item , _index)=>{
                        if(item.id == answer.id){
                            
                            draft[index].answers[_index].numDownvotes--;
                        }
                    });
                 
                })

                

                //setUser(draft => {draft.downvotedAnswers.delete(answer.id)});

              //  setUser(draft => {draft.downvotedAnswers = draft.downvotedAnswers.filter(item => item.id!=answer.id)});

              setUser(draft => {
                const idx = draft.downvotedAnswers.indexOf(answer.id);
                console.assert(idx>=0);
                draft.downvotedAnswers.splice(idx , 1);
             })

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

               

               // setUser(draft => {draft.downvotedAnswers.add(answer.id)});

        

              setUser(draft => {draft.downvotedAnswers.push(answer.id)});

                if(selected == 'upvote'){
               
                    setData(draft => {
                        draft[index].answers.forEach((item , _index)=>{
                            if(item.id == answer.id){
                                
                              draft[index].answers[_index].numUpvotes--;
                            }
                        });
                     
                    })

                

                 //  setUser(draft => {draft.upvotedAnswers.delete(answer.id)});

                 //  setUser(draft => {draft.upvotedAnswers = draft.upvotedAnswers.filter(item => item.id!=answer.id)})

                 setUser(draft => {
                    const idx = draft.upvotedAnswers.indexOf(answer.id);
                    console.assert(idx>=0);
                    draft.upvotedAnswers.splice(idx , 1);
                 })
                }

                setSelected('downvote');
            }
        

           
        }

    

        return (
            <div className={styles.voteWrapper}>
                <button className={styles[upvoteClassName]}
                onClick = {(e)=>handleUpvoteClick(e)}
                
                >Upvote</button>
                <span className={styles.count}>
                    {(answer ? answer.numUpvotes : 0)}
                </span>
                <button className={styles[downvoteClassName]} 
                onClick = {(e)=>handleDownvoteClick(e)}
               
                >Downvote</button>
                <span className={styles.count}>
                {(answer ? answer.numDownvotes : 0)}
                </span>
            </div>
        )
}