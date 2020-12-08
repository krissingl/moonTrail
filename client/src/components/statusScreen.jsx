import React, { useState, useEffect } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const StatusScreen = ({
  changePage,
  supplyObj,
  landmark,
  previousLandmark,
}) => {
  const { landmarkList } = data;
  let landmarkDistance;
  if (landmarkList[previousLandmark].length !== 1) {
    if (landmarkList[previousLandmark][1].next === landmark) {
      landmarkDistance = landmarkList[previousLandmark][1].distance;
    } else {
      landmarkDistance = landmarkList[previousLandmark][0].distance;
    }
  } else {
    landmarkDistance = landmarkList[previousLandmark][0].distance;
  }

  const [distCounter, setDistCounter] = useState(landmarkDistance);
  useEffect(() => {
    const timer = distCounter > 0 && setInterval(() => setDistCounter(distCounter - 1), 1000);
    if (distCounter === 0) {
      changePage('landmark');
    }
    return () => clearInterval(timer);
  }, [distCounter]);
  const [oxyCounter, setOxyCounter] = useState(supplyObj.oxygen.amount);
  useEffect(() => {
    const timer = oxyCounter > 0 && setInterval(() => setOxyCounter(oxyCounter - 1), 1000);
    if (oxyCounter === 0) {
      changePage('gameover');
    }
    return () => clearInterval(timer);
  }, [oxyCounter]);
  const [waterCounter, setWaterCounter] = useState(supplyObj.oxygen.amount);
  useEffect(() => {
    const timer = waterCounter > 0 && setInterval(() => setWaterCounter(waterCounter - 1), 1000);
    if (waterCounter === 0) {
      changePage('gameover');
    }
    return () => clearInterval(timer);
  }, [waterCounter]);

  return (
    <div className={classes.statusScreen}>
      <div className={classes.statusScreenOpt}>
        DISTANCE_TO_NEXT_LANDMARK:
        {distCounter}
      </div>
      <div className={classes.statusScreenOpt}>WEATHER: mild</div>
      <div className={classes.statusScreenOpt}>
        OXYGEN_REMAINING:
        {supplyObj.oxygen.amount}
      </div>
      <div className={classes.statusScreenOpt}>
        {`RATIONS_REMAINING: water__${supplyObj.water.amount} food__${supplyObj.food.amount}`}
      </div>
      <div className={classes.statusScreenOpt}>CREW_HEALTH: fair</div>
      <button type="button" onClick={() => { changePage('analyzeSitch'); }}>ANALYZE SITUATION</button>
    </div>
  );
};

export default StatusScreen;
