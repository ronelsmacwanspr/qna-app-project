import { Question } from "./globalClasses/Question";
import { Answer } from "./globalClasses/Answer";
import { User } from "./globalClasses/User";

// will generate dummy data to feed.

const currentUser = new User({id:1,name : "Ronels"});


function generateQuestions(questions){
    let count = 0;
    const date = new Date() , day = date.getDate() , month = date.getMonth() +1, year = date.getFullYear();


    let question1 = new Question({id : `q-${count++}` , userId : currentUser.id, datePosted : `${day}/${month}/${year}` ,
     categories : ['Music' , 'Entertainment'], title : `How to play a guitar? ` , description : `Recently I got a new idea of 
     playing guitar as my hobby. Since my childhood I am big of One Direction, Beatles and when I see them playing guitar, I wished I could 
     also do the same. Please give some tips of playing guitar`, answers : []});

     questions.push(question1);

     let question2 = new Question({id : `q-${count++}` , userId : currentUser.id, datePosted : `${day}/${month}/${year}` ,
     categories : ['Coding' , 'Web Development' , 'Front-end'], title : "How to become good at Javascript?" , description : `I am in 
     my first year of college and want to learn Web development. I want to begin with getting my hands on frontend. Please share some
     resources to be good at it`, answers : []});

     let question3 = new Question({id : `q-${count++}` , userId : currentUser.id , datePosted : `${day}/${month}/${year}`,
     categories : ['Cricket' , 'Bowling'] , title : `How to in-swing a ball ? ` , description : `I've been playing cricket since past 
     few weeks and want to learn to swing a bowl especially inswing. Please guide me through correct steps im. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
     eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
     Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
     Suspendisse lacus libero, condimentum eget sapien mattis, ullamcorper iaculis eros. Nullam sit amet felis vehicula, suscipit 
     lorem ut, sodales metus.Lorem ipsum dolor sit amet, consectetur adipiscing 
     elit. Integer nec tellus in quam eleifend interdum. Sed at ex rhoncus, porttitor lectus ut, faucibus tellus. Nulla 
     placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
     pellentesque sit amet at nibh. Sed mattis dui vitae metus tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing 
     elit. Vestibulum sed tortor enim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
     eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
     Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
     Suspendisse  placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
     pellentesque sit amet at nibh. Sed mattis dim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
     eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
     Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
     Suspendisse lacus libero, condimentum eget sapien mattis, ullamcorper iaculis eros. Nullam sit amet felis vehicula, suscipit 
     lorem ut, sodales metus.Lorem ipsum dolor sit amet, consectetur adipiscing 
     elit. Integer nec tellus in quam eleifend interdum. Sed at ex rhoncus, porttitor lectus ut, faucibus tellus. Nulla 
     placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
     pellentesque sit amet at nibh. Sed mattis dui vitae metus tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing 
     elit. Vestibulum sed tortor enim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
     eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
     Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
     Suspendisse  placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
     pellentesque sit amet at nibh. Sed mattis d` , answers : []  });

     let question4 = new Question({id : `q-${count++}` , userId : currentUser.id , datePosted : `${day}/${month}/${year}`,
     categories : ['Cricket' , 'Bowling'] , title : "How to in-swing a ball ?" , description : `I've been playing cricket since past 
     few weeks and want to learn to swing a bowl especially inswing. Please guide me through correct steps` , answers : []});

     questions.push(question2);
     questions.push(question3);
     questions.push(question4);

}



function generateAnswers(questions){

    let count = 0;
    const date = new Date() , day = date.getDate() , month = date.getMonth() +1, year = date.getFullYear();


    let prev = 3;
    for(let question of questions){
       
        for(let j=0;j < prev;++j){
        
        const answer = new Answer({id : `a-${count++}` , questionId : question.id , datePosted : `${day}/${month}/${year}` , 
        userId : currentUser.id , numUpvotes : 30, numDownvotes : 20, description : `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Integer nec tellus in quam eleifend interdum. Sed at ex rhoncus, porttitor lectus ut, faucibus tellus. Nulla 
       lacus libero, condimentum eget sapien mattis, ullamcorper iaculis eros. Nullam sit amet felis vehicula, suscipit 
        lorem ut, sodales metus. placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
        pellentesque sit amet at nibh. Sed mattis dui vitae metus tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Vestibulum sed tortor enim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
        eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
        Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
        Suspendisse lacus libero, condimentum eget sapien mattis, ullamcorper iaculis eros. Nullam sit amet felis vehicula, suscipit 
        lorem ut, sodales metus.Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Integer nec tellus in quam eleifend interdum. Sed at ex rhoncus, porttitor lectus ut, faucibus tellus. Nulla 
        placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
        pellentesque sit amet at nibh. Sed mattis dui vitae metus tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Vestibulum sed tortor enim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
        eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
        Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
        Suspendisse  placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
        pellentesque sit amet at nibh. Sed mattis dui vitae metus tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Vestibulum sed tortor enim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
        eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
        Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
        Suspendisse lacus libero, condimentum eget sapien mattis, ullamcorper iaculis eros. Nullam sit amet felis vehicula, suscipit 
        lorem ut, sodales metus.Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Integer nec tellus in quam eleifend interdum. Sed at ex rhoncus, porttitor lectus ut, faucibus tellus. Nulla 
        placerat magna leo, tempus malesuada tellus semper at. Donec rutrum id ipsum quis semper. Donec eget lacus a turpis maximus 
        pellentesque sit amet at nibh. Sed mattis dui vitae metus tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Vestibulum sed tortor enim. Sed ornare, metus nec faucibus rhoncus, nunc turpis ultricies metus, ut venenatis lorem ante 
        eget augue. Vivamus tortor leo, euismod ac pulvinar at, porta vel arcu. Suspendisse sit amet commodo justo. 
        Nulla ligula sapien, sollicitudin vel molestie et, tempor eget odio. Vivamus ullamcorper quam id finibus sollicitudin. 
        Suspendisse `
    });

    
    question.answers.push(answer);

    
    }
   
    prev+=4;
  
    }
}



function getTruncatedText(text , width , maxHeight , fontSize = 16 , fontWeight = 400 , fontFamily = 'Times'){
    
    const tempDiv = document.createElement('div');
    tempDiv.style.width = width;
    tempDiv.style.maxHeight = maxHeight;
    document.body.append(tempDiv);
    
    let index=0,truncatedText='',itr=0;

    while(tempDiv.scrollHeight <= tempDiv.clientHeight && index < text.length){
       
        const spanElement = document.createElement('span');
        spanElement.style.fontSize = fontSize;
        spanElement.style.fontWeight = fontWeight;
        spanElement.style.fontFamily = fontFamily;
        spanElement.innerText = text[index];

        //console.log("span -->" , spanElement);

         tempDiv.appendChild(spanElement);
        truncatedText+=text[index];
       // tempDiv.innerText=truncatedText;



        ++index;
        ++itr;

        if(itr > 5000){
            console.log("Inf loop in text truncator");
            break;
        }
    }
    
    if(truncatedText.length < text.length)
         truncatedText = truncatedText.slice(0,truncatedText.length-3) + "...";
    
    
         tempDiv.remove();

    return truncatedText;

}

function generateText(targetRef , description){
    if(targetRef.current){
        
        const element = targetRef.current;
        const compStyles = getComputedStyle(element);

       
        const truncatedText = getTruncatedText(description , compStyles.width , compStyles.maxHeight,
            compStyles.fontSize , compStyles.fontWeight , compStyles.fontFamily);
        return truncatedText;
    }
    return null;
}


export {generateAnswers , generateQuestions , getTruncatedText , generateText, currentUser};


