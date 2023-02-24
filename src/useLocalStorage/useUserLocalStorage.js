import { useEffect} from "react";
import { useImmer } from "use-immer";

// key : user

const KEY = 'user';
export const getLocalStorageValue = () => {

    if(typeof window !=='undefined'){
       
        const item = window.localStorage.getItem(KEY);
       
        console.log("item ", item);
        if(item){
            try{
                const jsonItem = JSON.parse(item);

                console.log("jsonItem ", jsonItem);
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
       const [user,setUser] = useImmer(() => getLocalStorageValue()|| initialValue);

       
   
       useEffect(()=>{
        try{
            const str = JSON.stringify(user);
            window.localStorage.setItem(KEY , str);
        } catch (err){
            console.error(err);
            console.log('Please enter valid User fields!');
        }

      }, [user,  initialValue]);


      return [user,setUser];

      
}