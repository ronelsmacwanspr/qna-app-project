

const User = function({id,name , from , bio}) {
    
    return {
        id : id || 1,
        name : name,
        bio : (!bio ? `Be the best version of yourself` : bio),
        from : (!from ? 'Ahmedabad' : from),
        questions : [],
        answers : [],
        upvotedAnswers : [],
        downvotedAnswers : [],
        // hasAskedSimilar(question){
        //     // iterate thru questions
        //     let found  = false;
        //     for(const _question of this.questions){
        //         if(question.isSimilarTo(_question)){
        //             found = true;
        //             break;
        //         }
        //     }
        //     return found;
        // }

        
    }
}

User.prototype.hasAskedSimilar = (question)=>{
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

export {User};