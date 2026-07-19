import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const Gameover = ({
  changePage,
  dispatch,
  crew,
  supplyObj,
  roverHealth,
  landmark,
}) => {
  const suppliesRemaining = Object.keys(supplyObj)
    .reduce((sum, key) => sum + supplyObj[key].amount, 0);

  const survivors = crew.filter((member) => member.health > 0);
  const crewHealthTotal = crew.reduce((sum, member) => sum + Math.max(0, member.health), 0);

  const score = (survivors.length * 100)
    + (suppliesRemaining * 5)
    + (crewHealthTotal * 2)
    + (roverHealth * 10);

  const restart = () => {
    dispatch({ type: 'reset' });
    changePage('main');
  };

  let outcome;
  if (survivors.length === 0) {
    outcome = (
      <div className={classes.outcomeBlock}>
        <h3>MISSION_FAILED</h3>
        <h5>THE ENTIRE CREW HAS PERISHED ON THE MOON.</h5>
      </div>
    );
  } else if (roverHealth <= 0) {
    outcome = (
      <div className={classes.outcomeBlock}>
        <h3>MISSION_FAILED</h3>
        <h5>THE ROVER HAS BROKEN DOWN. THE CREW IS STRANDED.</h5>
      </div>
    );
  } else if (landmark === 'HERODOTUS') {
    outcome = (
      <div className={classes.outcomeBlock}>
        <h3>CONGRATULATIONS!</h3>
        <h3>YOU_ARE_ENROUTE_HOME</h3>
        <h5>{`SURVIVORS: ${survivors.length} / ${crew.length}`}</h5>
        <div className={classes.survivorList}>
          {survivors.map((member) => (
            <div key={member.name} className={classes.survivorRow}>
              <span className={classes.survivorName}>{member.name}</span>
              <span className={classes.survivorStatus}>
                {`${member.status.toUpperCase()} (HEALTH ${member.health})`}
              </span>
            </div>
          ))}
        </div>
        <h5>{`FINAL_SCORE: ${score}`}</h5>
      </div>
    );
  } else {
    outcome = (
      <div className={classes.outcomeBlock}>
        <h3>MISSION_FAILED</h3>
        <h5>THE MISSION HAS ENDED.</h5>
      </div>
    );
  }

  return (
    <div className={classes.noticePage}>
      {outcome}
      <button type="button" className={classes.wideActionBtn} onClick={restart}>PLAY_AGAIN</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  crew: state.crew,
  supplyObj: state.supplyObj,
  roverHealth: state.roverHealth,
  landmark: state.landmark,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gameover);
