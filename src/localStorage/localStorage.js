import { useEffect,useMemo } from "react";
import { useImmer } from "use-immer";

const getFromLocalStorage = (key , deserializer)=>{
    if(typeof window === 'undefined') return null;

    let value = null;
    try{
        value = deserializer(localStorage.getItem(key));
        return value;
    }   
    catch(err){
        console.error(err);
        return null;
    }
} 

const setInLocalStorage = (key , value , serializer) => {
    if(typeof window === 'undefined') return null;

    try{
        const str = serializer(value);
        localStorage.setItem(key , str);
    } catch (err){
        console.error(err);
    }
}
const useLocalStorage = (key , initialValue = null , serializer = JSON.stringify, deserializer = JSON.parse) => {
    const [state , setState] = useImmer(()=>{
        const val = getFromLocalStorage(key , deserializer);
        if(val){
            return val;
        } 
        return initialValue;
    });

    useEffect(()=>{
        if(state){
            console.log('setting in effect-2 local storage as',state );
            setInLocalStorage(key , state , serializer);
        }
    } , [key , state]);

    const value = useMemo(()=>[state, setState] , [state]);

    return value;
}

export {useLocalStorage , setInLocalStorage , getFromLocalStorage};