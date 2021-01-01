import React, { useState } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Fork = ({
  dispatch,
  changePage,
  landmark,
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

  const changeGlobalTravelingStatus = (status) => {
    dispatch({
      type: 'changeTravelingStatus',
      payload: status,
    });
  };

  const changeGlobalCurrentLandmark = (newLandmark) => {
    dispatch({
      type: 'changeLandmark',
      payload: newLandmark,
    })
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
          <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption1); changePreviousLandmark(e, currentLandmark); changeGlobalTravelingStatus(true); changePage('traveling'); }}>{landmarkOption1}</button>
          <div className={classes.forkOR}>OR</div>
          <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption2); changePreviousLandmark(e, currentLandmark); changeGlobalTravelingStatus(true); changePage('traveling'); }}>{landmarkOption2}</button>
        </div>
        <button type="button" className={classes.forkMapBtn} onClick={() => { changeAlertType('map'); changeAlertMsg('ROUTE_MAP'); toggleAlert(true); }}>CHECK_MAP</button>
      </div>
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
)(Fork);
