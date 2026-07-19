import React, { useState } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
import classes from '../css/styles.css';

const Analyzation = ({
  changePage,
  dispatch,
  currentlyTraveling,
  rationLevel,
  roverPace,
}) => {
  const previous = currentlyTraveling ? 'traveling' : 'landmark';

  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');
  const [alertType, changeAlertType] = useState('');
  const [showRations, setShowRations] = useState(false);

  const popAlert = (msg, type = '') => {
    changeAlertType(type);
    changeAlertMsg(msg);
    toggleAlert(true);
  };

  const rest = () => {
    dispatch({ type: 'restCrew' });
    popAlert('THE CREW STOPS TO REST. AFFLICTIONS ARE TREATED AND THE WOUNDED RECOVER A LITTLE. REST ALONE WILL NOT BRING ANYONE BACK TO FULL STRENGTH. THIS COSTS TIME.');
  };

  const setRations = (level) => {
    dispatch({ type: 'setRationLevel', payload: level });
    setShowRations(false);
    popAlert(`RATIONS SET TO ${level.toUpperCase()}. LEANER RATIONS LAST LONGER BUT RISK ILLNESS.`);
  };

  const togglePace = () => {
    const next = roverPace === 'cautious' ? 'normal' : 'cautious';
    dispatch({ type: 'setRoverPace', payload: next });
    popAlert(next === 'cautious'
      ? 'ROVER SLOWED TO A CAUTIOUS PACE. SLOWER TRAVEL, LESS WEAR ON THE ROVER.'
      : 'ROVER RETURNED TO NORMAL PACE.');
  };

  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} type={alertType} />
    );
  }

  return (
    <div className={classes.noticePage}>
      <h3>ANALYZE_SITUATION</h3>
      <div>{alertPopUp}</div>
      <div className={classes.analyzeMenu}>
        <button type="button" className={classes.analyzeMenuBtn} onClick={rest}>STOP_TO_REST</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => setShowRations(!showRations)}>{`ALTER_CREW_RATIONS (${rationLevel})`}</button>
        {showRations ? (
          <div className={classes.rationOptions}>
            <button type="button" className={classes.analyzeMenuBtn} onClick={() => setRations('full')}>FULL</button>
            <button type="button" className={classes.analyzeMenuBtn} onClick={() => setRations('meager')}>MEAGER</button>
            <button type="button" className={classes.analyzeMenuBtn} onClick={() => setRations('bareBones')}>BARE_BONES</button>
          </div>
        ) : null}
        <button type="button" className={classes.analyzeMenuBtn} onClick={togglePace}>{`ALTER_ROVER_SPEED (${roverPace})`}</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => changePage('searchResources')}>SEARCH_FOR_RESOURCES</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => popAlert('ROUTE_MAP', 'map')}>CHECK_MAP</button>
        <button type="button" className={classes.analyzeMenuBtn} onClick={() => popAlert('CREW_SUPPLIES', 'checkSupplies')}>CHECK_CREW_SUPPLIES</button>
        <button type="button" onClick={() => { changePage(previous); }}>CONTINUE_MISSION</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentlyTraveling: state.currentlyTraveling,
  rationLevel: state.rationLevel,
  roverPace: state.roverPace,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Analyzation);
