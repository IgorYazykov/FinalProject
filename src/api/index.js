import axios from './service';

const quizlesAxios = {
  fetch: (() => axios.get('/quizl').then((data) => (data))),
};
const questions = {
  fetch: ((them) => axios.get(them).then((data) => (data))),
};
const putFavor = {
  fetch: ((data) => axios(data)),
};
export { quizlesAxios };
export { questions };
export { putFavor };
