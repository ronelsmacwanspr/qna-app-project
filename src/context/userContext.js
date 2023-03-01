import { useState,useContext,createContext } from "react";
import { currentUser } from "@/utils";
import { useImmer } from "use-immer";

import { useUserLocalStorage } from "@/useLocalStorage/useUserLocalStorage";
import { User } from "@/globalClasses/User";

const UserContext = createContext();

export  function UserProvider({children}){
    
    const [user , setUser] = useUserLocalStorage(new User({}));

    const UserContextValue = [
         user,
         setUser
    ]

    return (
        <UserContext.Provider value={UserContextValue}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    return useContext(UserContext);
}
