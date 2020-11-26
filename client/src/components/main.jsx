import React from 'react';
import classes from '../css/styles.css';

const Main = ({ changePage }) => (
  <div>
    <h1>WELCOME TO MOON TRAIL!</h1>
    <button type="button" className={classes.startBtn} onClick={() => { changePage('intro'); }}>Start</button>
  </div>
);

export default Main;
