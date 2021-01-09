import React, { useState } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Event = ({ changePage }) => {
  const { randomEventsList } = data;
  const randomIndex = Math.floor((Math.random() * randomEventsList.length));

  const [randomEvent, changeRandomEvent] = useState(randomEventsList[randomIndex].message);

  // changeRandomEvent(newEvent);

  return (
    <div className={classes.noticePage}>
      <h5>{randomEvent}</h5>
      <button type="button" onClick={() => { changePage('traveling'); }}>CONTINUE</button>
    </div>
  );
};

export default Event;
