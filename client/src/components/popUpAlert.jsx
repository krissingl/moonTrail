import React from 'react';
import Map from './map.jsx';
import SupplyCheck from './supplyCheck.jsx';
import classes from '../css/styles.css';

const AlertWindow = ({
  message,
  toggleAlert,
  type,
  extraData,
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
  } else if (type === 'checkSupplies') {
    popUpContent = (
      <div className={classes.popup}>
        <div className={classes.innerPopup}>
          <h5>{message}</h5>
          <SupplyCheck supplies={extraData} />
          <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
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

  return (
    <div>
      { popUpContent }
    </div>
  );
};

export default AlertWindow;
