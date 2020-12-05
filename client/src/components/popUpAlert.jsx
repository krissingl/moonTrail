import React from 'react';
import Map from './map.jsx';
import classes from '../css/styles.css';

const AlertWindow = ({
  message,
  toggleAlert,
  type,
}) => {
  let popUpContent;
  if (type === 'map') {
    popUpContent = (
      <div>
        <h5>{message}</h5>
        <Map />
      </div>
    );
  } else {
    popUpContent = (
      <h5>{message}</h5>
    );
  }
  console.log('Ollo?');
  return (
    <div className={classes.popup}>
      <div className={classes.innerPopup}>
        <div>{popUpContent}</div>
        <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
      </div>
    </div>
  );
};

export default AlertWindow;
