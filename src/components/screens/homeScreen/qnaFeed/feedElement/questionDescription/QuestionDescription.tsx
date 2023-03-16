import styles from "./styles.module.css";

type QuestionDescriptionPropsType = {
  questionDescription: string;
};

export default function QuestionDescription({
  questionDescription,
}: QuestionDescriptionPropsType) {
  return (
    <>
      <div className={styles.questionDescription}>{questionDescription}</div>
      <hr className={styles.line} />
    </>
  );
}
