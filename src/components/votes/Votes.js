import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getAnswerWithId, getUser, updateUser } from "@/utils";
import { VOTE_ACTIONS as actions } from "@/constants";

export default function Votes({ answer, setAnswers }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  let user = getUser();

  const [selected, setSelected] = useState(() => {
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

  function handleUpvoteClick() {
    user = getUser();
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

  function handleDownvoteClick() {
    user = getUser();

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

  function getButtonStyle(type) {
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
        onClick={(e) => handleUpvoteClick(e)}
      >
        Upvote
      </button>
      <span className={styles.count}>{upvoteCount}</span>
      <button
        className={getButtonStyle(actions.downvote)}
        onClick={(e) => handleDownvoteClick(e)}
      >
        Downvote
      </button>
      <span className={styles.count}>{downvoteCount}</span>
    </div>
  );
}
