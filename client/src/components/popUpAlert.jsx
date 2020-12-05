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
      <span>
        {/* <h5>{message}</h5> */}
        <Map />
      </span>
    );
  } else {
    popUpContent = (
      <h5>{message}</h5>
    );
  }
  console.log('Ollo?');
  return (
    <div className={classes.popup}>
      <span className={classes.innerPopup}>
        <span>{popUpContent}</span>
        <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
      </span>
    </div>
  );
};

export default AlertWindow;
