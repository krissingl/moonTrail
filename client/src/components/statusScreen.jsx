import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GetFinalSupplyObj from './getsupplyObj.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const StatusScreen = ({
  dispatch,
  changePage,
  supplyObj,
  savedDistance,
  nextLandmark,
  previousLandmark,
  eventConseq,
  crewHealth,
  roverHealth
}) => {
  // Local supply amount states
  const [oxyAmount, changeOxyAmount] = useState(supplyObj.oxygen.amount);
  const [foodAmount, changeFoodAmount] = useState(supplyObj.food.amount);
  const [waterAmount, changeWaterAmount] = useState(supplyObj.water.amount);
  const [clothesAmount, changeClothesAmount] = useState(supplyObj.clothes.amount);
  const [clothes2Amount, changeClothes2Amount] = useState(supplyObj.clothes2.amount);
  const [suitAmount, changeSuitAmount] = useState(supplyObj.spaceSuit.amount);
  const [suit2Amount, changeSuit2Amount] = useState(supplyObj.spaceSuit2.amount);
  const [aiKitAmount, changeAImainAmount] = useState(supplyObj.aiKit.amount);
  const [tirePatchAmount, changeTirePatchAmount] = useState(supplyObj.tirePatch.amount);
  const [roverKitAmount, changeRoverMainAmount] = useState(supplyObj.roverKit.amount);

  // Global Supply State manipulation functions
  const getNewSupplyAmountList = () => {
    const supplyAmountList = [
      oxyAmount,
      foodAmount,
      waterAmount,
      clothesAmount,
      clothes2Amount,
      suitAmount,
      suit2Amount,
      aiKitAmount,
      tirePatchAmount,
      roverKitAmount,
    ];
    return supplyAmountList;
  };
  const getNewSupplyAmountFuncList = () => {
    const supplyAmountFuncList = [
      changeOxyAmount,
      changeFoodAmount,
      changeWaterAmount,
      changeClothesAmount,
      changeClothes2Amount,
      changeSuitAmount,
      changeSuit2Amount,
      changeAImainAmount,
      changeTirePatchAmount,
      changeRoverMainAmount,
    ];
    return supplyAmountFuncList;
  };
  const [randomEventOn, toggleRandomEvent] = useState(false);

  const changeEventConseq = (consequence) => {
    dispatch({
      type: 'changeEventConseq',
      payload: consequence,
    });
  };

  if (eventConseq !== null) {
    if (eventConseq[0] === 'crewHealth') {
      changeEventConseq(null);
      console.log('crewHealth');
    } else if (eventConseq[0] === 'roverHealth') {
      changeEventConseq(null);
      console.log('roverHealth');
    } else {
      const supplyTypeIndex = eventConseq[0];
      const supplyAmount = eventConseq[1];
      changeEventConseq(null);
      console.log(eventConseq);
      const funcList = getNewSupplyAmountFuncList();
      const amountsList = getNewSupplyAmountList();
      const amountToBeChanged = amountsList[supplyTypeIndex];
      const functionToChangeConsequenceAmount = funcList[supplyTypeIndex];
      const newAmount = amountToBeChanged - supplyAmount;
      console.log(newAmount);
      functionToChangeConsequenceAmount(newAmount);
    }
  }

  // Getting landmark data for route
  const { landmarkList } = data;

  let landmarkDistance;
  if (savedDistance !== null) {
    landmarkDistance = savedDistance;
  } else if (landmarkList[previousLandmark].length !== 1) {
    if (landmarkList[previousLandmark][1].next === nextLandmark) {
      landmarkDistance = landmarkList[previousLandmark][1].distance;
    } else {
      landmarkDistance = landmarkList[previousLandmark][0].distance;
    }
  } else {
    landmarkDistance = landmarkList[previousLandmark][0].distance;
  }

  // Save distance traveled to redux store in case of page change
  const saveDistanceTraveled = (currentDistance) => {
    dispatch({
      type: 'landmarkDistanceChange',
      payload: currentDistance,
    });
  };

  const changeGlobalSupplyObj = (supplies) => {
    dispatch({
      type: 'supplyObjChange',
      payload: supplies,
    });
  };

  // Landmark distance calculator
  const [distCounter, setDistCounter] = useState(landmarkDistance);
  useEffect(() => {
    const timer = distCounter > 0 && setInterval(() => {
      setDistCounter(distCounter - 1);
    }, 1000);
    if (distCounter === 0) {
      changeGlobalSupplyObj(GetFinalSupplyObj(getNewSupplyAmountList()));
      saveDistanceTraveled(null);
      changePage('landmark');
    }
    return () => clearInterval(timer);
  }, [distCounter]);

  // Test Oxygen depletion function
  useEffect(() => {
    const timer = oxyAmount > 0 && setInterval(() => {
      changeOxyAmount(oxyAmount - 1);
    }, 10000);
    if (oxyAmount === 0) {
      // Need to add a message receiver for gameover page to tell player why they lost
      changePage('gameover');
    }
    return () => clearInterval(timer);
  }, [oxyAmount]);

  // Save distance and supply changes to global store in event of a page change
  const saveProgress = (distance) => {
    const finalSupplyObj = GetFinalSupplyObj(getNewSupplyAmountList());
    saveDistanceTraveled(distance);
    changeGlobalSupplyObj(finalSupplyObj);
  };

  // Generate random event
  useEffect(() => {
    const timer = oxyAmount > 0 && setInterval(() => {
      toggleRandomEvent(true);
    }, 5000);
    if (randomEventOn) {
      saveProgress(distCounter);
      changePage('event');
    }
    return () => clearInterval(timer);
  }, [oxyAmount]);

  return (
    <div className={classes.statusScreen}>
      <div className={classes.statusScreenOpt}>
        DISTANCE_TO_NEXT_LANDMARK:
        {distCounter}
      </div>
      <div className={classes.statusScreenOpt}>WEATHER: mild</div>
      <div className={classes.statusScreenOpt}>
        OXYGEN_REMAINING:
        {oxyAmount}
      </div>
      <div className={classes.statusScreenOpt}>
        {`RATIONS_REMAINING: water__${waterAmount} food__${foodAmount}`}
      </div>
      <div className={classes.statusScreenOpt}>CREW_HEALTH: fair</div>
      <button type="button" onClick={() => { saveProgress(distCounter); changePage('analyzeSitch'); }}>ANALYZE SITUATION</button>
      <button type="button" onClick={() => { saveProgress(distCounter); changePage('event'); }}>RANDOM EVENT</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  supplyObj: state.supplyObj,
  savedDistance: state.savedDistance,
  nextLandmark: state.nextLandmark,
  previousLandmark: state.previousLandmark,
  eventConseq: state.eventConseq,
  crewHealth: state.crewHealth,
  roverHealth: state.roverHealth,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusScreen);
