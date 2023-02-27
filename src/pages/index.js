
import { useEffect } from "react";
import { useRouter } from "next/router"; 
import {  getLocalStorageValue , useUserLocalStorage } from "@/useLocalStorage/useUserLocalStorage";
import { useUserContext } from "@/context/userContext";

export default function ScreenRedirect(){

    const router = useRouter();

    
  // const user = getLocalStorageValue();
  // const [user , setUser] = useUserLocalStorage();
   const [user , setUser] = useUserContext();

    useEffect(()=>{
     
      console.log("in index page user isa" , user);

      if(router.isReady){
        if(!user.name){
          router.push('/userLogin');
        }
        else
        router.push('/feed');
      }
    },[router.isReady,user]);

    return null;
}