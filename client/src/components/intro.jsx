import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Intro = ({ changePage }) => {
  const intro = data.introVerbiage;
  return (
    <div className={classes.noticePage}>
      <h2>SITUATION_DEBRIEFING</h2>
      <p>{intro}</p>
      <button type="button" onClick={() => { changePage('naming'); }}>Begin</button>
    </div>
  );
};

export default Intro;
