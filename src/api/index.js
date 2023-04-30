import axios from './service';

const quizlesAxios = {
  fetch: (() => axios.get('/quizl').then((data) => (data))),
};
const questions = {
  fetch: (() => axios.get('/Question').then((data) => (data))),
};
const putFavor = {
  fetch: ((data) => axios(data)),
};
const putNewQuizle = {
  fetch: ((data) => axios(data)),
};
const putNewQuestion = {
  fetch: ((data) => axios(data)),
};
export { quizlesAxios };
export { questions };
export { putFavor };
export { putNewQuizle };
export { putNewQuestion };
