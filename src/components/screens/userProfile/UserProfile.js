import { getLocalStorageValue , useUserLocalStorage } from "@/useLocalStorage/useUserLocalStorage";
import UserDetail from "./userDetail";
import Contribution from "./userDetail/contribution";
import { useState } from "react";


import styles from './styles.module.css';
import { useEffect } from "react";
import { serverRuntimeConfig } from "next.config";
const TextInputFieldKeys = ['name' , 'from' , 'bio'];
const LABEL = {
    name : 'Name',
    from : 'From',
    bio : 'Bio'
};


export default function UserProfile(){
    
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

   let user = null,render=[];
   
    user = JSON.parse(window.localStorage.getItem('user'));

    console.log('[name] ', user);
    for(let _key of TextInputFieldKeys){
        render.push(
            <UserDetail key={_key} name={LABEL[_key]} value={user[_key]} />
        );
    }

    render.splice(1,0,<UserDetail key={"id"}
                        name="ID" value={user.id}/>);
   


    return(
        <main>
        <div className={styles.wrapper}>
            
            <img  className={styles.icon} src = "/user.png" alt="User icon"/>
           

            <div className={styles.userDetails}>

                {render}

                <Contribution type={"questions"} />

                <Contribution type={"answers"} />
                
            </div>

        </div>
        </main>
    )
    
}