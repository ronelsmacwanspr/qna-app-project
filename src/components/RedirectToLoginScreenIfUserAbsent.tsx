import { getUser } from "../utils";
import { useEffect } from "react";
import { useRouter } from "next/router";


export const RedirectToLoginScreenIfUserAbsent = ({children}) : JSX.Element => {
    const router = useRouter();
    console.log('here in redirect screen user is', getUser());
    useEffect(()=>{
        const user = getUser();
        if(!user && router.isReady){
            router.push('/userLogin');
        }
    }, [router.isReady]);
    
    return (
        <div>
        {children}
        </div>
    );
    
}