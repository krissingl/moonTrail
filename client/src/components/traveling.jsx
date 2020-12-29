import React, { useState } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
import sky from '../../dist/extras/moonSky.png';
import bug from '../../dist/extras/rovers/bug.gif';
import jeep from '../../dist/extras/rovers/jeep.gif';
import stationWag from '../../dist/extras/rovers/stationWagon.gif';
import classes from '../css/styles.css';

const TravelingPage = ({ changePage, dispatch, rover }) => {
  // Local State Hooks
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  // Change the Global Traveling Status State
  const changeTravelingStatus = (status) => {
    dispatch({
      type: 'changeTravelingStatus',
      payload: status,
    });
  };

  // Change the Rover Image
  let roverImg;
  if (rover.type === 'StationWagon') {
    roverImg = (
      <span>
        <img className={classes.sWRoverImg} src={stationWag} alt="roverGif" />
      </span>
    );
  } else if (rover.type === 'MiddleMan') {
    roverImg = (
      <span>
        <img className={classes.jeepRoverImg} src={jeep} alt="roverGif" />
      </span>
    );
  } else {
    roverImg = (
      <span>
        <img className={classes.bugRoverImg} src={bug} alt="roverGif" />
      </span>
    );
  }

  // Alert Window Function
  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} />
    );
  }
  return (
    <div>
      <div className={classes.travelingCanvas}>
        <img className={classes.travelSky} src={sky} alt="sky" />
      </div>
      <div className={classes.travelSlide}>
        <div className={classes.mover1} />
        <div className={classes.mover2} />
        <span className={classes.drivingRover}>
          {roverImg}
        </span>
      </div>
      {alertPopUp}
      <button type="button" onClick={() => { changeAlertMsg('Someone died of dysentry.'); toggleAlert(true); }}>Someone Died</button>
      <button type="button" onClick={(e) => { changeTravelingStatus(e, false); changePage('landmark'); }}>Arrive at Landmark</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ rover: state.rover });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelingPage);
