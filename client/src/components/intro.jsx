import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Intro = ({ changePage }) => {
  const intro = data.introVerbiage;
  return (
    <div className={classes.noticePage}>
      <h2 className={classes.title}>SITUATION_DEBRIEFING</h2>
      <p>{intro}</p>
      <button type="button" onClick={() => { changePage('naming'); }}>BEGIN</button>
    </div>
  );
};

export default Intro;
