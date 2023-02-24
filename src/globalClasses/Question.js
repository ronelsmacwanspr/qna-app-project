const COMPARE_EQUAL_KEYS = [
    'userId', 'title','description'
];

export function Question( {id,userId,datePosted,categories,title,description,
    answers} ){
        const obj = {
        id : id,
        userId : userId,
        datePosted : datePosted,
        categories : (!categories ? [] : categories),
        title : title,
        description : (description),
        answers : (!answers ? [] : answers),

        isSimilarTo(otherQuestion){

            let similar = true;
           for(let key of COMPARE_EQUAL_KEYS){
            if(otherQuestion[key] != this[key]){
                similar = false;
                break;
            }
           }
           return similar;
        }
    

        
        }

        return obj;
}