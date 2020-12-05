import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Fork = ({
  changePage,
  landmark,
  changeLandmark,
  changePreviousLandmark,
  changeTravelingStatus,
}) => {
  const { landmarkList } = data;
  const currentLandmark = landmark;
  const landmarkOption1 = landmarkList[landmark][0].next;
  const landmarkOption2 = landmarkList[landmark][1].next;

  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');
  const [alertType, changeAlertType] = useState('');

  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow
        message={alertMsg}
        toggleAlert={toggleAlert}
        type={alertType}
      />
    );
  }

  return (
    <div className={classes.noticePage}>
      <div className={classes.forkContent}>
        <h3>
          FORK_DETECTED_IN_ROUTE/WHICH_DIRECTION_SHOULD_THE_CREW_TAKE?
        </h3>
        <div>
          {alertPopUp}
        </div>
        <div className={classes.forkOptions}>
          <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption1); changePreviousLandmark(e, currentLandmark); changeTravelingStatus(e, true); changePage('traveling'); }}>{landmarkOption1}</button>
          <div className={classes.forkOR}>OR</div>
          <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption2); changePreviousLandmark(e, currentLandmark); changeTravelingStatus(e, true); changePage('traveling'); }}>{landmarkOption2}</button>
        </div>
        <button type="button" className={classes.forkMapBtn} onClick={() => { changeAlertType('map'); changeAlertMsg('ROUTE_MAP'); toggleAlert(true); }}>CHECK_MAP</button>
      </div>
    </div>
  );
};

export default Fork;
