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
        
        }

        return obj;
}