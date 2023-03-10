import { getUser } from "@/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";


export const RedirectToLoginScreenIfUserAbsent = ({children}) => {
    const router = useRouter();
    console.log('here in redirect screen');
    useEffect(()=>{
        const user = getUser();
       
        console.log('user in effect hook ',user);
        if(!user && router.isReady){
            router.push('/userLogin');
        }
    }, [router.isReady]);
    
    return (
        <>
        {children}
        </>
    );
    
}