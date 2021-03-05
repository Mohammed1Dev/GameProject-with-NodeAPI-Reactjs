const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    answerOptions: [{
    answerText : {
        type: String
      },
    isCorrect : {
        type: Boolean
      },
     }],
     
     Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorys'
    }
        
    
});
const Quiz = mongoose.model("quizs",quizSchema);
module.exports = Quiz;


