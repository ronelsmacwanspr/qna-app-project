
import { useEffect } from "react";
import { useRouter } from "next/router"; 

export default function FeedScreenRedirect(){

    const router = useRouter();
    useEffect(()=>{
      if(router.isReady){
        router.push('/feed');
      }
    },[router.isReady]);
}