const Quiz = require('../models/Quiz.module');
const { response } = require('express');


const GetQuiz= async(req,res,next)=>{
  // let Category= req.params.cat;
  const Qu = await Quiz.find()   

  try{
      res.json(Qu);
  }catch(err){
     res.json({
         message: "empty Question"
     });
  }
//   await Quiz.find()
//   .then((Qu)=>{
//               res.json(Qu);
//               }
//               )
//   .catch(err =>{
//               res.json('No existing Questions => '+ err);
//               })  

}


const QuizCategory= async(req,res)=>{
  const Cat= req.params.cat;
  const QuiC = await Quiz.find({Category:Cat})   

  try{
      res.json(QuiC);
  }catch(err){
     res.json({
         message: "empty Question"
     });
  }
   
  }

  const addQuiz = async(req, res)=>{
      const newQuiz = new Quiz({
        questionText: req.body.questionText,
        answerOptions: req.body.answerOptions,
        Category: req.body.category
      })

      await newQuiz.save()
                    .then(savedQuiz => { res.send(savedQuiz.questionText + ' is Saved Successfuly')})
                    .catch(error => { res.send('Error Quiez not Saved Because '+ error)})


  }

  module.exports={QuizCategory,GetQuiz, addQuiz}