import React, { useState } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
import classes from '../css/styles.css';

const Analyzation = ({ changePage, currentlyTraveling }) => {
  let previous;
  if (currentlyTraveling) {
    previous = 'traveling';
  } else {
    previous = 'landmark';
  }

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
      <h3>
        ANALYZATION_OPTIONS...
      </h3>
      <div>
        {alertPopUp}
      </div>
      <div className={classes.analyzeMenu}>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => { changeAlertMsg('Crew is well-rested.'); toggleAlert(true); }}>STOP_TO_REST</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => { changeAlertMsg('Alter Crew Rations'); toggleAlert(true); }}>ALTER_CREW_RATIONS</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => { changeAlertMsg('Alter Rover Speed'); toggleAlert(true); }}>ALTER_ROVER_SPEED</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => { changeAlertMsg('You search for resources'); toggleAlert(true); }}>SEARCH_FOR_RESOURCES</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => { changeAlertType('map'); changeAlertMsg('ROUTE_MAP'); toggleAlert(true); }}>CHECK_MAP</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => { changeAlertType('checkSupplies'); changeAlertMsg('CREW_SUPPLIES'); toggleAlert(true); }}>CHECK_CREW_SUPPLIES</button>
        <button type="button" onClick={() => { changePage(previous); }}>CONTINUE MISSION</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentlyTraveling: state.currentlyTraveling });

export default connect(mapStateToProps)(Analyzation);
