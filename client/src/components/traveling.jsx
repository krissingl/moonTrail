import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
// import data from '../../dist/data.json';

const TravelingPage = ({ changePage, changeTravelingStatus }) => {
  // const { landmarkList } = data;
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
      <button type="button" onClick={(e) => { changeTravelingStatus(e, false); changePage('landmark'); }}>Arrive at Landmark</button>
    </div>
  );
};

export default TravelingPage;
