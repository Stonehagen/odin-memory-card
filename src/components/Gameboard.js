import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/Gameboard.css'
import {
  Abed,
  Annie,
  Britta,
  Hickey,
  Craig,
  Elroy,
  Frankie,
  Jeff,
  Pierce,
  Chang,
  Shirley,
  Troy,
} from '../img/imageIndex';

const Gameboard = ({ incrementScore, resetScore }) => {
  const [memory, setMemory] = useState([]);
  const [cards, setCards] = useState([
    { id: 0, name: 'Abed Nadir', image: Abed },
    { id: 1, name: 'Annie Edison', image: Annie },
    { id: 2, name: 'Britta Perry', image: Britta },
    { id: 3, name: 'Buzz Hickey', image: Hickey },
    { id: 4, name: 'Craig Pelton', image: Craig },
    { id: 5, name: 'Elroy Patashnik', image: Elroy },
    { id: 6, name: 'Frankie Dart', image: Frankie },
    { id: 7, name: 'Jeff Winger', image: Jeff },
    { id: 8, name: 'Pierce Hawthorne', image: Pierce },
    { id: 9, name: 'Senor Chang', image: Chang },
    { id: 10, name: 'Shirley Bannett', image: Shirley },
    { id: 11, name: 'Troy Barnes', image: Troy },
  ]);

  const clearMemory = () => {
    setMemory([]);
  };

  const hasDoubles = (array) => {
    const arrAsSet = new Set(array);
    return arrAsSet.size !== array.length;
  };

  const newGame = () => {
    resetScore();
    clearMemory();
  };

  const nextRound = (array) => {
    setMemory(array);
      incrementScore();
  }

  const addToMemory = (id) => {
    const newMemomory = memory.concat([id]);
    if (hasDoubles(newMemomory)) {
      newGame();
    } else {
      nextRound(newMemomory);
    }
  };

  const shuffleCards = () => {
    const copyCards = [...cards];
    for (let i = copyCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [copyCards[i], copyCards[j]] = [copyCards[j], copyCards[i]];
    }
    setCards(copyCards);
  };

  useEffect(() => {
    shuffleCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memory]);

  return (
    <div className="gameboard">
      {cards.map((card) => {
        return (
          <Card key={'card' + card.id} card={card} addToMemory={addToMemory} />
        );
      })}
    </div>
  );
};

export default Gameboard;
