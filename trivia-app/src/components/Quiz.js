import React from "react";
import { nanoid } from "nanoid";
import Question from "./Question";
import Questions from '../Questions.js'

export default function Quiz() {
  const [quiz, setQuiz] = React.useState(Questions);
  
  // reading data from an api 

  // React.useEffect(() => {
  //   fetch(
  //     "https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setQuiz(data.results));
  // }, []);

  const quizQuestions = quiz.map((question) => {
    question = {...question, id:nanoid()}
    const quizAnswers = question.incorrect_answers;
    const options = quizAnswers.map((option) => {
      return (
        <div className="answers">{option}</div>
      )
    });
    return <Question 
              question={question.question} 
              answers={options} 
              key={question.id} 
            />;
  });
  
  return (
    <div className="quiz-page">
      <div className="quiz-container">{quizQuestions}</div>
    </div>
  );
}