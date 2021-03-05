const express= require('express');
const Quizs= require('../controllers/Quiz.controller');
const route = express.Router();
route.get("/quiz/:cat",Quizs.QuizCategory);
route.get("/quiz",Quizs.GetQuiz);
module.exports=route;