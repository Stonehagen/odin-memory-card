import React from 'react';
import '../styles/Card.css';

const Card = ({ card, addToMemory }) => {
  const addIdToMemory = () => {
    addToMemory(card.id);
  };

  return (
    <div className="card" id={'card-' + card.id} onClick={addIdToMemory}>
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
    </div>
  );
};

export default Card;
