import React, { useState } from 'react';
import data from '../../dist/data.json';
// import classes from '../css/styles.css';

const Event = ({ changePage }) => {
  const [randomEvent, changeRandomEvent] = useState('');

  const { randomEventsList } = data;
  const randomIndex = Math.floor((Math.random() * randomEventsList.length));
  changeRandomEvent(randomEventsList[randomIndex].type);

  return (
    <div>
      <h1>{randomEvent}</h1>
      <button type="button" onClick={() => { changePage('traveling'); }}>Back to Travel</button>
    </div>
  );
};

export default Event;
