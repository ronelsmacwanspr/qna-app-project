

export function User({id,name , from , bio}){
    
    return {
        id : id || 1,
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