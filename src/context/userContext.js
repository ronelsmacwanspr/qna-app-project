import { useState,useContext,createContext } from "react";
import { currentUser } from "@/utils";
import { useImmer } from "use-immer";

const UserContext = createContext();

export  function UserProvider({children}){
    // const [user,setUser] = useState(currentUser);

    // const UserContextValue = [
    //      user,
    //      setUser
    // ];

    const [user,setUser] = useImmer(currentUser);

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
