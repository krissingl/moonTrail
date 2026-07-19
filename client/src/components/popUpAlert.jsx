import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map.jsx';
import SupplyCheck from './supplyCheck.jsx';
import classes from '../css/styles.css';

const AlertWindow = ({
  message,
  toggleAlert,
  type,
}) => {
  let body = null;
  if (type === 'map') {
    body = <Map />;
  } else if (type === 'checkSupplies') {
    body = <SupplyCheck />;
  }

  const innerClass = body ? classes.wideInnerPopup : classes.innerPopup;

  return ReactDOM.createPortal(
    <div className={classes.popup}>
      <div className={innerClass}>
        <h5 className={classes.popupTitle}>{message}</h5>
        {body}
        <button
          type="button"
          className={classes.popupCloseBtn}
          onClick={() => { toggleAlert(false); }}
        >
          CLOSE
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default AlertWindow;
