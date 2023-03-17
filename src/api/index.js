import axios from "./service"

const quizles = {
    fetch: () => axios.get('/quizl').then(data => data), 
}

export {quizles};