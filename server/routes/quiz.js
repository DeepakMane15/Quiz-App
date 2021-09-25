
const express = require('express')
const router = express.Router()

const {addQuiz,addQuestion,getQuiz,initialData,searchQuiz,filterQuiz,searchById} = require('../Controller/quiz')




router.post('/create', addQuiz);
router.post('/add', addQuestion);
router.get('/quizzes', getQuiz);
router.post('/initialdata', initialData);
router.post('/searchQuiz', searchQuiz);
router.post('/filterQuiz', filterQuiz);
router.post('/searchById', searchById);




module.exports = router