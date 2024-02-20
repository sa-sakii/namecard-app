import React from "react";
import Quiz from "./Quiz";

export default function HomePage() {
  const [game, setGame] = React.useState(false);

  const startQuiz = () => {
    setGame(!game);
  };
  
  return (
    <main>
      {game === false && (
        <div className="home-container">
          <h1 className="home-header">Trivia Game</h1>
          <button className="start-quiz-btn" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      )}
      {game === true && <Quiz />}
    </main>
  );
}
