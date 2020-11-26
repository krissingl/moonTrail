import React from 'react';
import classes from '../css/styles.css';

const AlertWindow = ({ message, toggleAlert }) => (
  <div className={classes.popup}>
    <div className={classes.innerPopup}>
      <h5>{ message }</h5>
      <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
    </div>
  </div>
);

export default AlertWindow;
