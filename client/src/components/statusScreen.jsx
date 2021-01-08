import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
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

  const [isTraveling, toggleTraveling] = useState(true);
  const [randomEvent, changeRandomEvent] = useState('');
  const [eventCounterTest, changeEventCountTest] = useState(0);
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  console.log(isTraveling);

  // Getting landmark data for route
  const { landmarkList } = data;
  const { randomEventsList } = data;

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
  const changeGlobalSupplyObj = (supplies) => {
    dispatch({
      type: 'supplyObjChange',
      payload: supplies,
    });
  };

  // Landmark distance calculator
  const [distCounter, setDistCounter] = useState(landmarkDistance);
  useEffect(() => {
    console.log('Is this function firing?');
    const timer = distCounter > 0 && isTraveling === true && setInterval(() => {
      setDistCounter(distCounter - 1);
    }, 1000);
    if (distCounter === 0) {
      changeGlobalSupplyObj(GetFinalSupplyObj(getNewSupplyAmountList()));
      saveDistanceTraveled(null);
      changePage('landmark');
    }
    if (!isTraveling) {
      console.log('Second function test check');
    }
    return () => clearInterval(timer);
  }, [distCounter]);

  // Test Oxygen depletion function
  useEffect(() => {
    const timer = oxyAmount > 0 && isTraveling === true && setInterval(() => {
      changeOxyAmount(oxyAmount - 1);
    }, 10000);
    if (oxyAmount === 0) {
      // Need to add a message receiver for gameover page to tell player why they lost
      changePage('gameover');
    }
    return () => clearInterval(timer);
  }, [oxyAmount]);

  // Alert Window Function
  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow
        message={alertMsg}
        toggleAlert={toggleAlert}
        toggleTraveling={toggleTraveling}
      />
    );
  }

  useEffect(() => {
    const randomEventGeneration = randomEvent === '' && setInterval(() => {
      const randomIndex = Math.floor((Math.random() * randomEventsList.length));
      // changeRandomEvent(randomEventsList[randomIndex].type);
      changeAlertMsg(randomEventsList[randomIndex].message);
      toggleTraveling(false);
      toggleAlert(true);
    }, 11000);
    return () => clearInterval(randomEventGeneration);
  }, [randomEvent]);

  return (
    <div className={classes.statusScreen}>
      {alertPopUp}
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
      <button type="button" onClick={() => { const finalSupplyObj = GetFinalSupplyObj(getNewSupplyAmountList()); changeGlobalSupplyObj(finalSupplyObj); saveDistanceTraveled(distCounter); changePage('analyzeSitch'); }}>ANALYZE SITUATION</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  supplyObj: state.supplyObj,
  savedDistance: state.savedDistance,
  nextLandmark: state.nextLandmark,
  previousLandmark: state.previousLandmark,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusScreen);
