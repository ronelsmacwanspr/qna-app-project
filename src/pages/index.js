
import { useEffect } from "react";
import { useRouter } from "next/router"; 

export default function ScreenRedirect(){

    const router = useRouter();


   let user = null;

    useEffect(()=>{
     user = JSON.parse(window.localStorage.getItem('user'));
      console.log('index -> user ', user);

      if(router.isReady){
        if(!user?.name){
          router.push('/userLogin');
        }
        else
        router.push('/feed');
      }
    },[router.isReady,user]);

    return null;
}