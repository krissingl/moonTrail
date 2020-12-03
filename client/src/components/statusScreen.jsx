import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const StatusScreen = ({
  changePage,
  supplyList,
  landmark,
}) => {
  const { landmarkList } = data;
  const landmarkDistance = landmarkList[landmark][0].distance;
  console.log(landmark);
  return (
    <div className={classes.statusScreen}>
      <div className={classes.statusScreenOpt}>
        DISTANCE_TO_NEXT_LANDMARK:
        {landmarkDistance}
      </div>
      <div className={classes.statusScreenOpt}>WEATHER: mild</div>
      <div className={classes.statusScreenOpt}>OXYGEN_REMAINING: 0</div>
      <div className={classes.statusScreenOpt}>RATIONS_REMAINING: water__0 food__0</div>
      <div className={classes.statusScreenOpt}>CREW_HEALTH: fair</div>
      <button type="button" onClick={() => { changePage('analyzeSitch'); }}>ANALYZE SITUATION</button>
    </div>
  );
};

export default StatusScreen;
