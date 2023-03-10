import { useImmer } from "use-immer";
import { User } from "@/globalClasses/User";
import { TextInputField } from "./textInputField/";
import styles from './styles.module.css';
import SubmitButton from "@/components/submitButton";

import { USER_PROFILE_FIELDS } from "@/constants";

// const TextInputFieldKeys = ['name' , 'from' , 'bio'];
// const LABEL = {
//     name : 'Name',
//     from : 'From',
//     bio : 'Bio'
// };
const PLACEHOLDER = {
    name : 'Please Enter your name',
    from : 'Where are you from?',
    bio : 'Tell something about yourself'
}

const UserLoginForm = () => {
    const [tempUser , setTempUser] = useImmer(new User({}));

  let user = null;
   console.log("window type is ", typeof window);  
    console.log("user ", user);

    const removeExtraSpaces = (str) => {
        if(!str){
            return false;
        }
        let arr = str.split(' ').filter(item=> item!='');
        let res='';

        arr.forEach((item , index)=>{
            res+=item;
            if(index!=arr.length-1){
                res+=' ';
            }
        });

        return res;

    }

    const handleSubmit = () => {

       const name = removeExtraSpaces(tempUser.name);
       const from = removeExtraSpaces(tempUser.from);
       const bio = removeExtraSpaces(tempUser.bio);

       if(!name || name == ''){
        alert('Name cannot be empty!');
        return false;
       }

      const _user = new User({name : name, from : from , bio : bio});
            window.localStorage.setItem('user' , JSON.stringify(_user));


      return true;

    }

    console.log('temp-user ', tempUser);
    function handleChange(key , event){
        setTempUser(draft => {
            draft[key] = event.target.value;
        })
    }

    let render = [];
    for(const _key of USER_PROFILE_FIELDS.inputKeys){
        render.push(
            <TextInputField 
            key = {_key}
            _key={_key}
            label = {USER_PROFILE_FIELDS.keysLabel[_key]}
            placeholder = {PLACEHOLDER[_key]}
            handleChange = {handleChange}
            />
        );
    }

    return (
        <main>
            <div className={styles.formWrapper}>
                
            {render}

            <SubmitButton handleSubmit={handleSubmit}
            successMessage = "You are successfully registered!"
            name = "REGISTER"
            />
            </div>

            
        </main>
    )


}

export {UserLoginForm};