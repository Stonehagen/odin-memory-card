import React, { useState } from 'react';
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

const Gameboard = () => {
  const [cards] = useState([
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

  return <div>Gameboard</div>;
};

export default Gameboard;
