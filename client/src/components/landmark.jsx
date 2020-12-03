import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Landmark = ({
  changePage,
  landmark,
  changeLandmark,
  changePreviousLandmark,
  changeTravelingStatus,
}) => {
  const { landmarkList } = data;
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  let nextLandmark;
  let currentLandmark;
  let isThereFork = false;
  if (landmark === 'HERODOTUS') {
    nextLandmark = null;
  } else if (landmarkList[landmark].length !== 1) {
    isThereFork = true;
  } else {
    currentLandmark = landmark;
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
        changePreviousLandmark={changePreviousLandmark}
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
      <button type="button" onClick={(e) => { changeLandmark(e, nextLandmark); changePreviousLandmark(e, currentLandmark); changeTravelingStatus(e, true); changePage('traveling'); }}>CONTINUE MISSION</button>
    );
  }
  return (
    <div className={classes.noticePage}>
      <h2>
        {`YOU_HAVE_ARRIVED_AT_${landmark}`}
      </h2>
      {alertPopUp}
      <h3>WHAT_WOULD_YOU_LIKE_TO_DO?</h3>
      <button type="button">LOOK AROUND</button>
      <button type="button" onClick={() => { changeAlertMsg('cannot contact GROUND_CONTROL right now'); toggleAlert(true); }}>ATTEMPT CONTACT WITH GROUND CONTROL</button>
      <button type="button" onClick={() => { changeAlertMsg('cannot debug CACAL right now'); toggleAlert(true); }}>ATTEMPT CACAL DEBUG</button>
      {continueBtn}
    </div>
  );
};

export default Landmark;
