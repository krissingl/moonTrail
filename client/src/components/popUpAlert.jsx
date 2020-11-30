import React from 'react';
import classes from '../css/styles.css';

const AlertWindow = ({
  message,
  toggleAlert,
  // isFork,
  // toggleIsFork,
  // landmark,
  // changeLandmark
}) => (
  <div className={classes.popup}>
    <div className={classes.innerPopup}>
      <h5>{ message }</h5>
      <button type="button" onClick={() => { toggleAlert(false); }}>Close</button>
    </div>
  </div>
);

export default AlertWindow;

/*
  // if (isFork) {
  //   return (
  //     <div className={classes.popup}>
  //       <div className={classes.innerPopup}>
  //         <h5>{ message }</h5>
<button type="button" onClick={() => { toggleIsFork(false); toggleAlert(false); }}>This One</button>
<button type="button" onClick={() =>
  { toggleIsFork(false); toggleAlert(false); }}>Or This One</button>
  //       </div>
  //     </div>
  //   );
  // }
*/
