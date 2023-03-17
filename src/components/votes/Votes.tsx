import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getAnswerWithId, getUser, updateUser } from "../../utils";
import { VOTE_ACTIONS as actions } from "../../constants";

import { AnswerType } from "../../globalClasses/Answer";
import { Updater } from "use-immer";

type VotesPropsType = {
  answer: AnswerType;
  setAnswers: Updater<AnswerType[]>;
};

export default function Votes({ answer, setAnswers }: VotesPropsType) {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  let user = getUser();

  const [selected, setSelected] = useState<string | null>(() => {
    if (!user || !answer) {
      return null;
    }

    if (user.upvotedAnswers.includes(answer.id)) {
      return actions.upvote;
    } else if (user.downvotedAnswers.includes(answer.id)) {
      return actions.downvote;
    }
    return null;
  });

  //  console.log('data-->',data);
  //  console.log('answer-->',answer);

  // console.log('selecetd is' , selected);

  const upvoteCount = answer ? answer.numUpvotes : 0,
    downvoteCount = answer ? answer.numDownvotes : 0;

  function handleUpvoteClick(): void {
    user = getUser();
    if (!user) {
      throw new Error("User does not exists");
    }

    if (selected == actions.upvote) {
      setAnswers((draft) => {
        const __answer = getAnswerWithId(draft, answer.id);
        // console.log(Object.is(__answer , draft[Number(answer.id.slice(2))]));
        __answer.numUpvotes--;
      });

      const idx = user.upvotedAnswers.indexOf(answer.id);
      console.assert(idx >= 0);
      user.upvotedAnswers.splice(idx, 1);
      updateUser(user);

      setSelected(null);
    } else {
      setAnswers((draft) => {
        const __answer = getAnswerWithId(draft, answer.id);
        // console.log(Object.is(__answer , draft[Number(answer.id.slice(2))]));
        __answer.numUpvotes++;
      });

      user = {
        ...user,
        upvotedAnswers: [...user.upvotedAnswers, answer.id],
      };
      updateUser(user);

      if (selected == actions.downvote) {
        setAnswers((draft) => {
          const __answer = getAnswerWithId(draft, answer.id);
          // console.log(Object.is(__answer , draft[Number(answer.id.slice(2))]));
          __answer.numDownvotes--;
        });

        const idx = user.downvotedAnswers.indexOf(answer.id);
        console.assert(idx >= 0);
        user.downvotedAnswers.splice(idx, 1);
        updateUser(user);
      }
      setSelected(actions.upvote);
    }
  }

  function handleDownvoteClick(): void {
    user = getUser();

    if (!user) {
      throw new Error("User does not exists");
    }

    if (selected == actions.downvote) {
      setAnswers((draft) => {
        const __answer = getAnswerWithId(draft, answer.id);
        __answer.numDownvotes--;
      });

      const idx = user.downvotedAnswers.indexOf(answer.id);
      console.assert(idx >= 0);
      user.downvotedAnswers.splice(idx, 1);
      updateUser(user);

      setSelected(null);
    } else {
      setAnswers((draft) => {
        const __answer = getAnswerWithId(draft, answer.id);
        __answer.numDownvotes++;
      });

      //user.downvotedAnswers.push(answer.id);
      user = {
        ...user,
        downvotedAnswers: [...user.downvotedAnswers, answer.id],
      };
      updateUser(user);

      if (selected == actions.upvote) {
        setAnswers((draft) => {
          const __answer = getAnswerWithId(draft, answer.id);
          __answer.numUpvotes--;
        });

        const idx = user.upvotedAnswers.indexOf(answer.id);
        console.assert(idx >= 0);
        user.upvotedAnswers.splice(idx, 1);
        updateUser(user);
      }

      setSelected(actions.downvote);
    }
  }

  function getButtonStyle(type: string) {
    if (type == actions.upvote) {
      if (selected == type) {
        return styles.upvoteSelected;
      }
      return styles.upvote;
    }

    if (selected == actions.downvote) {
      return styles.downvoteSelected;
    }
    return styles.downvote;
  }

  return (
    <div className={styles.voteWrapper}>
      <button
        className={getButtonStyle(actions.upvote)}
        onClick={handleUpvoteClick}
      >
        Upvote
      </button>
      <span className={styles.count}>{upvoteCount}</span>
      <button
        className={getButtonStyle(actions.downvote)}
        onClick={handleDownvoteClick}
      >
        Downvote
      </button>
      <span className={styles.count}>{downvoteCount}</span>
    </div>
  );
}
