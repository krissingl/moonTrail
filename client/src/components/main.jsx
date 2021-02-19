import React from 'react';
import classes from '../css/styles.css';

const Main = ({ changePage }) => (
  <div className={classes.noticePage}>
    <h1>MOON_TRAIL</h1>
    <button type="button" className={classes.startBtn} onClick={() => { changePage('intro'); }}>START</button>
  </div>
);

export default Main;
