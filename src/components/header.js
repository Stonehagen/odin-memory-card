import React from 'react';
import '../styles/Header.css';

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <h1>Community Memory Game</h1>
      <div className='subheader'>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
        <div className='scores'>
          <p>Score:{score}</p>
          <p>Highscore:{highScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
