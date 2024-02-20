import React from "react";

export default function Question(props) {
    return (
    <div className="question-container">
      <h4 className="question">{props.question}</h4>
      <div className="options">{props.answers}</div>
    </div>
  );
}
// progress 
// mapped and set up the quiz questions and answers 
// designed the same
