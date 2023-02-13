import React, { useState } from 'react';
import './styles/App.css';
import Gameboard from './components/Gameboard';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Community Memory Game</h1>
        <h4>
          Get points by clicking on an image but don't click on any more than
          once!
        </h4>
        <p>Score:{score}</p>
        <p>Highscore:{highScore}</p>
      </div>
      <Gameboard
        incrementScore={incrementScore}
        resetScore={resetScore}
        score={score}
      />
    </div>
  );
};

export default App;
