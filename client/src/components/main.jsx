import React from 'react';
import classes from '../css/styles.css';

const Main = ({ changePage }) => {
  return (
    <div>
      <h1>Welcome to Moon Trail!</h1>
      <button className={classes.startBtn} onClick={() => { changePage('intro'); }} >Start</button>
    </div>
  )
}

export default Main;
