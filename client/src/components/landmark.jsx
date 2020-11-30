import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';

const Landmark = ({
  changePage,
  landmark,
  changeLandmark,
  changeTravelingStatus,
}) => {
  const { landmarkList } = data;
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  let nextLandmark;
  let isThereFork = false;
  if (landmark === 'HERODOTUS') {
    nextLandmark = null;
  } else if (landmarkList[landmark].length !== 1) {
    isThereFork = true;
  } else {
    nextLandmark = landmarkList[landmark][0].next;
  }

  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow
        message={alertMsg}
        toggleAlert={toggleAlert}
        landmark={landmark}
        changeLandmark={changeLandmark}
      />
    );
  }

  let continueBtn;
  if (isThereFork) {
    continueBtn = (
      <button type="button" onClick={() => { changePage('fork'); }}>CONTINUE MISSION</button>
    );
  } else if (landmark === 'HERODOTUS') {
    continueBtn = (
      <button type="button" onClick={() => { changePage('gameover'); }}>MISSION COMPLETION</button>
    );
  } else {
    continueBtn = (
      <button type="button" onClick={(e) => { changeLandmark(e, nextLandmark); changeTravelingStatus(e, true); changePage('traveling'); }}>CONTINUE MISSION</button>
    );
  }
  return (
    <div>
      <h3>
        {`YOU_HAVE_ARRIVED_AT_${landmark}`}
      </h3>
      {alertPopUp}
      <button type="button">LOOK AROUND</button>
      <button type="button" onClick={() => { changeAlertMsg('cannot contact GROUND_CONTROL right now'); toggleAlert(true); }}>ATTEMPT CONTACT WITH GROUND CONTROL</button>
      <button type="button" onClick={() => { changeAlertMsg('cannot debug CACAL right now'); toggleAlert(true); }}>ATTEMPT CACAL DEBUG</button>
      {continueBtn}
    </div>
  );
};

export default Landmark;
