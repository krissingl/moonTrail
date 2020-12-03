import React from 'react';
import classes from '../css/styles.css';

const Analyzation = ({ changePage, travelingStatus }) => {
  let previous;
  if (travelingStatus) {
    previous = 'traveling';
  } else {
    previous = 'landmark';
  }
  return (
    <div className={classes.noticePage}>
      <h3>
        ANALYZATION_OPTIONS...
      </h3>
      <div className={classes.analyzeMenu}>
        <button type="button" className={classes.analyzeMenuBtn}>STOP_TO_REST</button>
        <button type="button" className={classes.analyzeMenuBtn}>ALTER_CREW_RATIONS</button>
        <button type="button" className={classes.analyzeMenuBtn}>ALTER_ROVER_SPEED</button>
        <button type="button" className={classes.analyzeMenuBtn}>SEARCH_FOR_RESOURCES</button>
        <button type="button" className={classes.analyzeMenuBtn}>CHECK_MAP</button>
        <button type="button" className={classes.analyzeMenuBtn}>CHECK_CREW_SUPPLIES</button>
        <button type="button" onClick={() => { changePage(previous); }}>CONTINUE MISSION</button>
      </div>
    </div>
  );
};

export default Analyzation;
