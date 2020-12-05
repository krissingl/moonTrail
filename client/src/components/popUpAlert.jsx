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
      <div className={classes.popup}>
        <div className={classes.mapInnerPopup}>
          <div>
            <h5>{message}</h5>
            <Map />
            <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    popUpContent = (
      <div className={classes.popup}>
        <div className={classes.innerPopup}>
          <h5>{message}</h5>
          <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
        </div>
      </div>
    );
  }
  console.log('Ollo?');
  return (
    <div>
      { popUpContent }
    </div>
  );
};

export default AlertWindow;
