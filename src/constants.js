export const COMPARE_EQUAL_KEYS = [
    'userId', 'title','description'
];

export const STATE_KEYS = {
    data : 'data',
}

export const VOTE_ACTIONS = {
    upvote : 'upvote',
    downvote : 'downvote'
}

export const UserKeys = {id : 'id' , name : 'name' , from : 'from' , bio : 'bio' , questions : 'questions', answers : 'answers'};

export const USER_PROFILE_FIELDS = {
    
    inputKeys : [UserKeys.name , UserKeys.from , UserKeys.bio],
    keysLabel : {
        [UserKeys.id] : 'ID',
        [UserKeys.name] : 'Name',
        [UserKeys.from] : 'From',
        [UserKeys.bio] : 'Bio',
        [UserKeys.questions] : 'Questions',
        [UserKeys.answers] : 'Answers'
    },

}