import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';

const TravelingPage = ({ changePage }) => {
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');
  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} />
    );
  }
  return (
    <div>
      <h3>
        This is the Traveling screen
      </h3>
      {alertPopUp}
      <button type="button" onClick={() => { changeAlertMsg('Someone died of dysentry.'); toggleAlert(true); }}>Someone Died</button>
      <button type="button" onClick={() => { changePage('landmark'); }}>Arrive at Landmark</button>
    </div>
  );
};

export default TravelingPage;
