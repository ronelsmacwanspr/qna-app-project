
import { useEffect } from "react";
import { useRouter } from "next/router"; 
import {  getLocalStorageValue , useUserLocalStorage } from "@/useLocalStorage/useUserLocalStorage";

export default function ScreenRedirect(){

    const router = useRouter();

    const [user , setUser] = useUserLocalStorage();
  // const user = getLocalStorageValue();
  
    console.log("in index" , user);


    useEffect(()=>{
      if(router.isReady){
        if(!user){
          router.push('/userLogin');
        }
        else
        router.push('/feed');
      }
    },[router.isReady , user]);
}