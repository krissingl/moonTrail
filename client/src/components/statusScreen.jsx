import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const EVENT_BASE_CHANCE = 0.04;
const EVENT_RAMP = 0.03;
const EVENT_MAX_CHANCE = 0.3;
const EVENT_COOLDOWN = 2;

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
  eventlessTicks,
}) => {
  const { landmarkList } = data;
  const eventlessRef = useRef(eventlessTicks);
  eventlessRef.current = eventlessTicks;

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
      if (eventlessRef.current < EVENT_COOLDOWN) {
        return;
      }
      const chance = Math.min(
        EVENT_MAX_CHANCE,
        EVENT_BASE_CHANCE + (EVENT_RAMP * eventlessRef.current),
      );
      if (Math.random() < chance) {
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
      <div className={classes.statusGrid}>
        <div className={classes.statusColumn}>
          <div className={classes.statusHeading}>MISSION</div>
          <div className={classes.statusScreenOpt}>{`DISTANCE_TO_NEXT: ${distanceRemaining}`}</div>
          <div className={classes.statusScreenOpt}>WEATHER: mild</div>
          <div className={classes.statusScreenOpt}>{`RATIONS: ${rationLevel}`}</div>
          <div className={classes.statusScreenOpt}>{`PACE: ${roverPace}`}</div>
          <div className={classes.statusScreenOpt}>{`ROVER_HEALTH: ${roverHealth}`}</div>
        </div>

        <div className={classes.statusColumn}>
          <div className={classes.statusHeading}>SUPPLIES</div>
          <div className={classes.statusScreenOpt}>{`OXYGEN: ${supplyAmount('oxygen')}`}</div>
          <div className={classes.statusScreenOpt}>{`WATER: ${supplyAmount('water')}`}</div>
          <div className={classes.statusScreenOpt}>{`FOOD: ${supplyAmount('food')}`}</div>
        </div>

        <div className={classes.statusColumn}>
          <div className={classes.statusHeading}>CREW</div>
          {crew.map((member) => (
            <div className={classes.statusScreenOpt} key={member.name}>
              {member.health <= 0
                ? `${member.name}: PERISHED`
                : `${member.name}: ${member.health}${member.status !== 'healthy' ? ` (${member.status})` : ''}`}
            </div>
          ))}
        </div>

        <div className={classes.statusActions}>
          <button
            type="button"
            className={classes.statusActionBtn}
            onClick={() => { changePage('analyzeSitch'); }}
          >
            ANALYZE_SITUATION
          </button>
        </div>
      </div>
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
  eventlessTicks: state.eventlessTicks,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusScreen);
