import axios from './service';

const quizles = {
  fetch: (() => axios.get('/quizl').then((data) => (data))),
};
const questions = {
  fetch: ((them) => axios.get(them).then((data) => (data))),
};
const putFavor = {
  fetch: ((data) => axios(data)),
};
export { quizles };
export { questions };
export { putFavor };
