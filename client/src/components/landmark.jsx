import React, { useState } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Landmark = ({
  dispatch,
  changePage,
  landmark,
}) => {
  const { landmarkList } = data;
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  // Checking for a Fork and Setting the Landmarks
  let localNextLandmark;
  let localCurrentLandmark;
  let isThereFork = false;
  if (landmark === 'HERODOTUS') {
    localNextLandmark = null;
  } else if (landmarkList[landmark].length !== 1) {
    isThereFork = true;
  } else {
    localCurrentLandmark = landmark;
    localNextLandmark = landmarkList[landmark][0].next;
  }

  // Change Global Traveling Status
  const changeTravelingStatus = (status) => {
    dispatch({
      type: 'changeTravelingStatus',
      payload: status,
    });
  };

  const changeCurrentGlobalLandmark = (newLandmark) => {
    console.log(newLandmark);
    dispatch({
      type: 'changeLandmark',
      payload: newLandmark,
    });
  };

  const changePreviousGlobalLandmark = (prevLandmark) => {
    console.log(prevLandmark);
    dispatch({
      type: 'changePrevLandmark',
      payload: prevLandmark,
    });
  };

  // Alert Window Function
  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow
        message={alertMsg}
        toggleAlert={toggleAlert}
      />
    );
  }

  // Different functionalities based off forks and landmarks
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
      <button type="button" onClick={() => { changeCurrentGlobalLandmark(localNextLandmark); changePreviousGlobalLandmark(localCurrentLandmark); changeTravelingStatus(true); changePage('traveling'); }}>CONTINUE MISSION</button>
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

const mapStateToProps = (state) => ({ landmark: state.landmark });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landmark);
