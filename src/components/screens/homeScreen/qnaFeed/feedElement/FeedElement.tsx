import styles from "./styles.module.css";
import QuestionTitle from "./questionTitle";
import QuestionDescription from "./questionDescription";
import AnswerDescription from "./answerDescription";
import Votes from "../../../../votes";
import Link from "next/link";
import React from "react";
import { QuestionType } from "../../../../../globalClasses/Question";
import { AnswerType } from "../../../../../globalClasses/Answer";
import { Updater } from "use-immer";

type FeedElementPropsType = {
  question: QuestionType;
  answer: AnswerType | null;
  setAnswers: Updater<AnswerType[]>;
};

function FeedElement({ question, answer, setAnswers }: FeedElementPropsType) {
  const answerDescription =
      question.answers.length == 0 ? null : answer!.description,
    questionDescription = !question.description ? null : question.description;

  const location = `/q/${question.id}`;

  return (
    <div className={styles.feedElement}>
      <Link href={location}>
        <QuestionTitle questionTitle={question.title} />
      </Link>
      <QuestionDescription questionDescription={questionDescription} />
      <AnswerDescription answerDescription={answerDescription} />
      {answer ? <Votes answer={answer} setAnswers={setAnswers} /> : null}
    </div>
  );
}

export default React.memo(FeedElement);
