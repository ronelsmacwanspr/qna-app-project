// this file will render feedElements in flexbox

import FeedElement from "./feedElement";
import styles from "./styles.module.css";
import { useLocalStorage } from "../../../../localStorage/localStorage";
import { STATE_KEYS } from "../../../../constants";
import { dummyAnswers, dummyQuestions } from "../../../../data";
import { getAnswerWithId } from "../../../../utils";

import { QuestionType } from "../../../../globalClasses/Question";
import { AnswerType } from "../../../../globalClasses/Answer";

export default function QnAFeed() {
  let feed: JSX.Element[] = [];

  const [data, setData] = useLocalStorage<QuestionType[]>(
    STATE_KEYS.data,
    dummyQuestions
  );
  const [answers, setAnswers] = useLocalStorage<AnswerType[]>(
    STATE_KEYS.answers,
    dummyAnswers
  );

  if (!data || !answers) {
    return null;
  }

  console.log("data", data);
  console.log("answers", answers);

  data.forEach((question) => {
    feed.push(
      <FeedElement
        question={question}
        key={question.id}
        answer={
          question.answers.length > 0
            ? getAnswerWithId(answers, question.answers[0])
            : null
        }
        setAnswers={setAnswers}
      />
    );
  });

  return <div className={styles.qnaFeedWrapper}>{feed}</div>;
}
