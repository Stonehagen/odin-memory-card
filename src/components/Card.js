import React from 'react';

const Card = ({props}) => {
  const card = props.card;
  const addToMemory = props.addToMemory;

  const addIdToMemory = () => {
    addToMemory(card.id)
  }

  return (
    <div className="card" id={'card-' + card.id} onClick={addIdToMemory}>
     <img src={card.image} alt={card.name} />
     <h3>{card.name}</h3>
    </div>
  );
};

export default Card;
