import styles from "./styles.module.css";
import { useRouter } from "next/router";

type SubmitButtonPropsType = {
  handleSubmit: () => boolean;
  successMessage: string;
  name: string;
};

export default function SubmitButton({
  handleSubmit,
  successMessage,
  name,
}: SubmitButtonPropsType) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type="submit"
      onClick={() => {
        const success = handleSubmit();
        if (success) {
          alert(successMessage);
          router.push("/");
        }
      }}
    >
      {name}
    </button>
  );
}
