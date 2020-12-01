import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import sky from '../../dist/extras/moonSky.png';
import bug from '../../dist/extras/rovers/bug.gif';
import jeep from '../../dist/extras/rovers/jeep.gif';
import stationWag from '../../dist/extras/rovers/stationWagon.gif';
import classes from '../css/styles.css';
// import data from '../../dist/data.json';

const TravelingPage = ({ changePage, changeTravelingStatus, rover }) => {
  // const { landmarkList } = data;
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  let roverImg;
  if (rover.type === 'StationWagon') {
    roverImg = (
      <div>
        <img className={classes.sWRoverImg} src={stationWag} alt="roverGif" />
      </div>
    );
  } else if (rover.type === 'MiddleMan') {
    roverImg = (
      <div>
        <img className={classes.jeepRoverImg} src={jeep} alt="roverGif" />
      </div>
    );
  } else {
    roverImg = (
      <div>
        <img className={classes.bugRoverImg} src={bug} alt="roverGif" />
      </div>
    );
  }

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

export default TravelingPage;
