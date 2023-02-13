import React, { useState } from 'react';
import './styles/App.css';
import Gameboard from './components/Gameboard';
import Header from './components/header';

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
      <Header score={score} highScore={highScore}/>
      <Gameboard
        incrementScore={incrementScore}
        resetScore={resetScore}
      />
    </div>
  );
};

export default App;
