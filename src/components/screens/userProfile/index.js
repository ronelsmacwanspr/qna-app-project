import { useUserContext } from "@/context/userContext";
import UserDetail from "./userDetail";
import Contribution from "./userDetail/contribution";


import styles from './styles.module.css';

export default function UserProfile(){
    const [user , setUser] = useUserContext();

    return(
        <main>
        <div className={styles.wrapper}>
            
            <img  className={styles.icon} src = "/user.png" alt="User icon"/>
           

            <div className={styles.userDetails}>

                <UserDetail name={"Name"} value = {user.name} />

                <UserDetail name = "ID" value={user.id} /> 

                <UserDetail name="From" value={user.from} />

                <UserDetail name = "Bio" value={user.bio} />

                <Contribution type={"questions"} />

                <Contribution type={"answers"} />
                
            </div>

        </div>
        </main>
    )
    
}