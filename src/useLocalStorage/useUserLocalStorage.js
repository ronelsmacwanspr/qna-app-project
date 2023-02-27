import { useEffect} from "react";
import { useImmer } from "use-immer";

// key : user

const KEY = 'user';
export const getLocalStorageValue = () => {

    if(typeof window !=='undefined'){
       
        const item = window.localStorage.getItem(KEY);
       
      
        if(item){
            try{
                const jsonItem = JSON.parse(item);

                console.log("jsonItem in local storage ", jsonItem);
                return jsonItem;
            }
            catch(err){
                console.error(err);
                return null;
            }
        }
        else{
            return null;
        }
    }
   return null;
}



export const useUserLocalStorage = (initialValue = null) => {
       const [user,setUser] = useImmer(() => getLocalStorageValue() || initialValue);


    //    useEffect(()=>{
    //         const obj = JSON.parse(window.localStorage.getItem(KEY));
    //         if(obj){
    //             setUser(obj);
    //         } else {
    //             setUser(initialValue);
    //         }
    //     } , [])


       useEffect(()=>{
        console.log('updating local stor in effect');
        console.log('user in second effect ', user);
       

        if(user){
        try{
            if(user!=initialValue){
            const str = JSON.stringify(user);
            window.localStorage.setItem(KEY , str);
            console.log('setted ' , KEY , str);
            }
        } catch (err){
            console.error(err);
            console.log('Please enter valid User fields!');
        }
            }

      },[user]);


      return [user,setUser];

      
}