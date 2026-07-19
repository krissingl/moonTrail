import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const EVENT_CHANCE = 0.09;

const StatusScreen = ({
  dispatch,
  changePage,
  supplyObj,
  savedDistance,
  previousLandmark,
  landmark,
  crew,
  roverHealth,
  notifications,
  rationLevel,
  roverPace,
}) => {
  const { landmarkList } = data;

  const legDistance = () => {
    const branches = landmarkList[previousLandmark];
    if (!branches) {
      return 0;
    }
    const match = branches.find((branch) => branch.next === landmark);
    return match ? match.distance : branches[0].distance;
  };

  useEffect(() => {
    if (savedDistance === null) {
      dispatch({ type: 'landmarkDistanceChange', payload: legDistance() });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'travelTick' });
      if (Math.random() < EVENT_CHANCE) {
        changePage('event');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (savedDistance !== null && savedDistance <= 0) {
      dispatch({ type: 'landmarkDistanceChange', payload: null });
      changePage('landmark');
    }
  }, [savedDistance]);

  useEffect(() => {
    const living = crew.filter((member) => member.health > 0).length;
    if (crew.length > 0 && living === 0) {
      changePage('gameover');
      return;
    }
    if (roverHealth <= 0) {
      changePage('gameover');
      return;
    }
    if (notifications.length > 0) {
      changePage('notice');
    }
  }, [crew, roverHealth, notifications]);

  const supplyAmount = (key) => (supplyObj[key] ? supplyObj[key].amount : 0);
  const distanceRemaining = savedDistance !== null ? savedDistance : legDistance();

  return (
    <div className={classes.statusScreen}>
      <div className={classes.statusScreenOpt}>
        DISTANCE_TO_NEXT_LANDMARK:
        {distanceRemaining}
      </div>
      <div className={classes.statusScreenOpt}>WEATHER: mild</div>
      <div className={classes.statusScreenOpt}>
        OXYGEN_REMAINING:
        {supplyAmount('oxygen')}
      </div>
      <div className={classes.statusScreenOpt}>
        {`RATIONS_REMAINING: water__${supplyAmount('water')} food__${supplyAmount('food')}`}
      </div>
      <div className={classes.statusScreenOpt}>CREW:</div>
      {crew.map((member) => (
        <div className={classes.statusScreenOpt} key={member.name}>
          {member.health <= 0
            ? `  ${member.name}: PERISHED`
            : `  ${member.name}: health ${member.health}${member.status !== 'healthy' ? ` (${member.status})` : ''}`}
        </div>
      ))}
      <div className={classes.statusScreenOpt}>
        ROVER_HEALTH:
        {roverHealth}
      </div>
      <div className={classes.statusScreenOpt}>
        {`RATIONS: ${rationLevel}   PACE: ${roverPace}`}
      </div>
      <button type="button" onClick={() => { changePage('analyzeSitch'); }}>ANALYZE_SITUATION</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  supplyObj: state.supplyObj,
  savedDistance: state.savedDistance,
  previousLandmark: state.previousLandmark,
  landmark: state.landmark,
  crew: state.crew,
  roverHealth: state.roverHealth,
  notifications: state.notifications,
  rationLevel: state.rationLevel,
  roverPace: state.roverPace,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusScreen);
