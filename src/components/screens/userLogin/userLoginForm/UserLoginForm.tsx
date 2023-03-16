import { useImmer } from "use-immer";
import { User } from "../../../../globalClasses/User";
import { TextInputField } from "./textInputField";
import styles from "./styles.module.css";
import SubmitButton from "../../../submitButton";

import { USER_PROFILE_FIELDS, UserKeys } from "../../../../constants";
import { getUser, updateUser } from "../../../../utils";
import { useRouter } from "next/router";

const PLACEHOLDER = {
  [UserKeys.name]: "Please Enter your name",
  [UserKeys.from]: "Where are you from?",
  [UserKeys.bio]: "Tell something about yourself",
};

import { UserType } from "../../../../globalClasses/User";
import { ChangeEvent, useState } from "react";

const UserLoginForm = () => {
  const [tempUser, setTempUser] = useState<UserType>(
    new User({
      id: -1,
      name: "",
      from: "",
      bio: "",
      questions: [],
      answers: [],
      upvotedAnswers: [],
      downvotedAnswers: [],
    }) as UserType
  );

  const router = useRouter();

  let user = null;
  console.log("window type is ", typeof window);
  console.log("user ", user);

  const removeExtraSpaces = (str: string): string => {
    if (!str) {
      return "";
    }
    let arr = str.split(" ").filter((item) => item != "");
    let res = "";

    arr.forEach((item, index) => {
      res += item;
      if (index != arr.length - 1) {
        res += " ";
      }
    });

    return res;
  };

  const handleSubmit = (): boolean => {
    if (getUser()) {
      alert("You are already registered!");
      setTimeout(() => {
        router.push("/");
      }, 1000);

      return false;
    }

    const name = removeExtraSpaces(tempUser.name);
    const from = removeExtraSpaces(tempUser.from);
    const bio = removeExtraSpaces(tempUser.bio);

    if (!name || name == "") {
      alert("Name cannot be empty!");
      return false;
    }

    const _user = new User({
      id: 1,
      name: name,
      from: from,
      bio: bio,
      answers: [],
      questions: [],
      upvotedAnswers: [],
      downvotedAnswers: [],
    }) as UserType;

    updateUser(_user);

    return true;
  };

  console.log("temp-user ", tempUser);
  function handleChange(
    key: string,
    event: ChangeEvent<HTMLInputElement>
  ): void {
    setTempUser({
      ...tempUser,
      [key]: event.target.value,
    });
  }

  let render = [];
  for (const _key of USER_PROFILE_FIELDS.inputKeys) {
    render.push(
      <TextInputField
        key={_key}
        _key={_key}
        label={USER_PROFILE_FIELDS.keysLabel[_key]}
        placeholder={PLACEHOLDER[_key]}
        handleChange={handleChange}
      />
    );
  }

  return (
    <main>
      <div className={styles.formWrapper}>
        {render}

        <SubmitButton
          handleSubmit={handleSubmit}
          successMessage="You are successfully registered!"
          name="REGISTER"
        />
      </div>
    </main>
  );
};

export { UserLoginForm };
