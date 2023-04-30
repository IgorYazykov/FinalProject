export const textError = {
  required: (field) => `You must complete ${field}`,
  minLength: (field, lenght) => `it's too short for ${field},should be no less ${lenght}`,
  maxLength: (field, lenght) => `it's too long for ${field},should be no more ${lenght}`,
};

export const quizleRules = {
  Title: {
    required: { value: true, message: textError.required('title of quizle') },
    minLength: { value: 3, message: textError.minLength('title', '3') },
    maxLenght: { value: 16, message: textError.maxLength('title', '16') },
  },
  TitleDescription: {
    required: { value: true, message: textError.required('description of quizle') },
    minLength: { value: 3, message: textError.minLength('description', '3') },
    maxLenght: { value: 60, message: textError.maxLength('description', '60') },
  },
  image: {
    required: { value: true, message: textError.required('image') },
  },
  FullDescription: {
    required: { value: true, message: textError.required('full description of quizle') },
    minLength: { value: 10, message: textError.minLength('description', '10') },
    maxLenght: { value: 100, message: textError.maxLength('description', '100') },
  },
  Question: {
    required: { value: true, message: textError.required('question') },
    minLength: { value: 3, message: textError.minLength('question', '10') },
    maxLenght: { value: 60, message: textError.maxLength('question', '40') },
  },
  FirstAnswer: {
    required: { value: true, message: textError.required('first answer') },
    minLength: { value: 3, message: textError.minLength('first answer', '3') },
    maxLenght: { value: 60, message: textError.maxLength('first answer', '20') },
  },
  SecondAnswer: {
    required: { value: true, message: textError.required('second answer') },
    minLength: { value: 3, message: textError.minLength('second answer', '3') },
    maxLenght: { value: 60, message: textError.maxLength('second answer', '20') },
  },
  ThirdAnswer: {
    required: { value: true, message: textError.required('third answer') },
    minLength: { value: 3, message: textError.minLength('third answer', '3') },
    maxLenght: { value: 60, message: textError.maxLength('third answer', '20') },
  },
  FourthAnswer: {
    required: { value: true, message: textError.required('fourth answer') },
    minLength: { value: 3, message: textError.minLength('fourth answer', '3') },
    maxLenght: { value: 60, message: textError.maxLength('fourth answer', '20') },
  },
  CorrectAnswer: {
    required: { value: true, message: textError.required('correct answer') },
    minLength: { value: 3, message: textError.minLength('correct answer', '3') },
    maxLenght: { value: 60, message: textError.maxLength('correct answer', '20') },
  },
};
