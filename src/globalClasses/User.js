// import { immerable } from "immer";

// export class User{
//     [immerable] = true;


//     constructor({id , name}){
//         this.id = id;
//         this.name = name;
//         this.questions = new Set();
//         this.answers =  new Set();
//         this.upvotedAnswers = new Set();
//         this.downvotedAnswers = new Set();
    
//     }

//     hasAskedSimilar(question){
//         // iterate thru questions
//         let found  = false;
//         for(const _question of this.questions){
//             if(question.isSimilarTo(_question)){
//                 found = true;
//                 break;
//             }
//         }
//         return found;
//     }
// }

// export const User = ({id , name}) => {
//     const obj= {
//         id : id,
//         name : name,
//         questions : new Set(),
//         answers : new Set(),
//         upvotedAnswers : new Set(),
//         downvotedAnswers : new Set(),
//         hasAskedSimilar(question){
//             // iterate thru questions
//             let found  = false;
//             for(const _question of this.questions){
//                 if(question.isSimilarTo(_question)){
//                     found = true;
//                     break;
//                 }
//             }
//             return found;
//         }

        
//     }

//     return obj;
// }

export function User({id,name , from , bio}){
    
    return {
        id : id,
        name : name,
        bio : (!bio ? `Be the best version of yourself` : bio),
        from : (!from ? 'Ahmedabad' : from),
        questions : new Set(),
        answers : new Set(),
        upvotedAnswers : new Set(),
        downvotedAnswers : new Set(),
        hasAskedSimilar(question){
            // iterate thru questions
            let found  = false;
            for(const _question of this.questions){
                if(question.isSimilarTo(_question)){
                    found = true;
                    break;
                }
            }
            return found;
        }

        
    }

}