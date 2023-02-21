
import { generateAnswers,generateQuestions } from "./utils";



let questions = []; // array of questions, questions already contains anwers. Hence full data is ready

generateQuestions(questions);
generateAnswers(questions);

export {questions};