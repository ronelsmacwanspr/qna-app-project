import styles from './styles.module.css';
import { useDataContext } from '@/context/dataContext';
import { useUserContext } from '@/context/userContext';

export default function Votes({answer , index}){

    
    if(!answer) return null;
    
    const [data,setData] = useDataContext();
    const [user , setUser] = useUserContext();

    let selected = null;
     
    if(user.upvotedAnswers.has(answer.id)){
        selected = 'upvote';
    } else if(user.downvotedAnswers.has(answer.id)){
        selected = 'downvote';
    }

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

                return draft;
                });

                setUser((draft) => {
                    draft.upvotedAnswers.delete(answer.id);
                   
                })
            }
            else{
            

                setData((draft) => {
                       draft[index].answers.forEach((item , _index)=>{
                        if(item.id == answer.id){
                            
                            draft[index].answers[_index].numUpvotes++;
                        }
                    });

                 
                });

                setUser(draft => {draft.upvotedAnswers.add(answer.id)});

                if(selected == 'downvote'){
               

                    setData(draft => {
                        draft[index].answers.forEach((item , _index)=>{
                            if(item.id == answer.id){
                                
                                draft[index].answers[_index].numDownvotes--;
                            }
                        });
                      
                    })
    
                   
                 
                   setUser(draft => {draft.downvotedAnswers.delete(answer.id)});
                }
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

                

                setUser(draft => {draft.downvotedAnswers.delete(answer.id)});


            } else {
            
                setData(draft => {
                    draft[index].answers.forEach((item , _index)=>{
                        if(item.id == answer.id){
                            
                            draft[index].answers[_index].numDownvotes++;
                        }
                    });
                  
                })

               

                setUser(draft => {draft.downvotedAnswers.add(answer.id)});

                if(selected == 'upvote'){
               
                    setData(draft => {
                        draft[index].answers.forEach((item , _index)=>{
                            if(item.id == answer.id){
                                
                              draft[index].answers[_index].numUpvotes--;
                            }
                        });
                     
                    })

                

                   setUser(draft => {draft.upvotedAnswers.delete(answer.id)});
                }
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