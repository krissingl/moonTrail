import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GetFinalSupplyObj from './getsupplyObj.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const StatusScreen = ({
  changePage,
  supplyObj,
  landmark,
  previousLandmark,
}) => {
  const [oxyObj, changeOxyObj] = useState(supplyObj.oxygen);
  const [foodObj, changeFoodObj] = useState(supplyObj.food);
  const [waterObj, changeWaterObj] = useState(supplyObj.water);
  const [clothesObj, changeClothesObj] = useState(supplyObj.clothes);
  const [clothes2Obj, changeClothes2Obj] = useState(supplyObj.oxygen);
  const [suitObj, changeSuitObj] = useState(supplyObj.food);
  const [suit2Obj, changeSuit2Obj] = useState(supplyObj.water);
  const [AImainObj, changeAIObj] = useState(supplyObj.clothes);
  const [tirePatchObj, changeTirePatchObj] = useState(supplyObj.food);
  const [roverMaintObj, changeRoverMaintObj] = useState(supplyObj.water);

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
  // const [oxyCounter, setOxyCounter] = useState(supplyObj.oxygen.amount);
  // useEffect(() => {
  //   const timer = oxyCounter > 0 && setInterval(() => {
  //     setOxyCounter(oxyCounter - 1);
  //   }, 1000);
  //   if (oxyCounter === 0) {
  //     changePage('gameover');
  //   }
  //   return () => clearInterval(timer);
  // }, [oxyCounter]);

  const getNewSupplyAmountList = () => {
    const supplyAmountList = [
      oxyObj.amount,
      foodObj.amount,
      waterObj.amount,
      clothesObj.amount,
      clothes2Obj.amount,
      suitObj.amount,
      suit2Obj.amount,
      AImainObj.amount,
      tirePatchObj.amount,
      roverMaintObj.amount,
    ];
    return supplyAmountList;
  };

  return (
    <div className={classes.statusScreen}>
      <div className={classes.statusScreenOpt}>
        DISTANCE_TO_NEXT_LANDMARK:
        {distCounter}
      </div>
      <div className={classes.statusScreenOpt}>WEATHER: mild</div>
      <div className={classes.statusScreenOpt}>
        OXYGEN_REMAINING:
        {oxyObj.amount}
      </div>
      <div className={classes.statusScreenOpt}>
        {`RATIONS_REMAINING: water__${waterObj.amount} food__${foodObj.amount}`}
      </div>
      <div className={classes.statusScreenOpt}>CREW_HEALTH: fair</div>
      <button type="button" onClick={() => { changePage('analyzeSitch'); }}>ANALYZE SITUATION</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ supplyObj: state.supplyObj });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusScreen);
