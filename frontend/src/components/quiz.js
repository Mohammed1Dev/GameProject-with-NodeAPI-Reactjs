import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './styleSheet/quiz.css'

 function Quiz({match}) {
    const [questions,setQuestions] = useState([]);
console.log("match ", match.params.id);
let {id}= match.params;

    useEffect(() => {   
        axios.get(`http://127.0.0.1:3000/api/quiz/${id}`)
          .then(res =>{
            setQuestions(
                res.data
                )
               console.log(res.data);
          }
		  )
}); 

   
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 10);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
	 <div >
			{showScore ? (
		 		<div className='score-section'>
				You scored {score} points 
			</div>
	 	) : questions.length ? (
		 		<>
					 <div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,index) => (
							<button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			):'null'} 
		 </div>
	);
}

export default Quiz