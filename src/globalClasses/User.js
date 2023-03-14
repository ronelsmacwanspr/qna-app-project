

const User = function({id,name , from , bio}) {
    
    return {
        id : id || 1,
        name : name,
        bio : (!bio ? `Be the best version of yourself` : bio),
        from : (!from ? 'Ahmedabad' : from),
        questions : [], //ids
        answers : [], //ids
        upvotedAnswers : [], //ids
        downvotedAnswers : [], //ids
        
    }
}

export {User};