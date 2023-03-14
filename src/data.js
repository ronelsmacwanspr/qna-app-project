
import { generateAnswers,generateQuestions } from "./utils";



let dummyQuestions = []; // array of questions, questions already contains anwers. Hence full data is ready

generateQuestions(dummyQuestions);
generateAnswers(dummyQuestions);

export {dummyQuestions};