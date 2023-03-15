
import { generateAnswers,generateQuestions } from "./utils";



let dummyQuestions = []; // array of questions, questions already contains anwers. Hence full data is ready
let dummyAnswers = [];

generateQuestions(dummyQuestions);
generateAnswers(dummyQuestions , dummyAnswers);

export {dummyQuestions , dummyAnswers};