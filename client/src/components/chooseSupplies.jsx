/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage, changeFinalSupplies, maxStorage }) => {
  const [totalWeight, changeTotalWeight] = useState(0);
  const [oxyAmount, changeOxyAmount] = useState(0);
  const [foodAmount, changeFoodAmount] = useState(0);
  const [waterAmount, changeWaterAmount] = useState(0);
  const [clothesAmount, changeClothesAmount] = useState(0);
  const [clothesAmount2, changeClothesAmount2] = useState(0);
  const [suitAmount, changeSuitAmount] = useState(0);
  const [suitAmount2, changeSuitAmount2] = useState(0);
  const [AImainAmount, changeAImainAmount] = useState(0);
  const [tirePatchAmount, changeTirePatchAmount] = useState(0);
  const [roverMainAmount, changeRoverMainAmount] = useState(0);
  const [showAlert, toggleAlert] = useState(false);

  const supplyAmountList = [
    oxyAmount,
    foodAmount,
    waterAmount,
    clothesAmount,
    clothesAmount2,
    suitAmount,
    suitAmount2,
    AImainAmount,
    tirePatchAmount,
    roverMainAmount,
  ];
  const supplyAmountFuncList = [
    changeOxyAmount,
    changeFoodAmount,
    changeWaterAmount,
    changeClothesAmount,
    changeClothesAmount2,
    changeSuitAmount,
    changeSuitAmount2,
    changeAImainAmount,
    changeTirePatchAmount,
    changeRoverMainAmount,
  ];

  const addOneSupply = (e, callback, value) => {
    if ((totalWeight + Number(e.target.value)) <= maxStorage) {
      changeTotalWeight(totalWeight + Number(e.target.value));
      callback(value + 1);
    } else {
      toggleAlert(true);
    }
  };
  const minusOneSupply = (e, callback, value) => {
    changeTotalWeight(totalWeight - Number(e.target.value));
    callback(value - 1);
  };
  const supplyList = data.supplyList.map((supply, index) => (
    <div className={classes.supplyItem} key={supply.type}>
      <label>
        {`${supply.type} (WEIGHT: ${supply.weight})`}
        <br />
        {`how many: ${supplyAmountList[index]}`}
      </label>
      <div>
        <button type="button" value={supply.weight} onClick={(e) => minusOneSupply(e, supplyAmountFuncList[index], supplyAmountList[index])}>--</button>
        <button type="button" value={supply.weight} onClick={(e) => addOneSupply(e, supplyAmountFuncList[index], supplyAmountList[index])}>+</button>
      </div>
    </div>
  ));
  const getFinalSupplies = () => {
    const finalSupplyList = data.supplyList.map((supply, index) => {
      const finalSupply = {
        type: supply.type,
        weight: supply.weight,
        amount: supplyAmountList[index],
        totalWeight: (supplyAmountList[index] * supply.weight),
      };
      return finalSupply;
    });
    return finalSupplyList;
  };
  let alertPopUp;
  if (showAlert) {
    const alertMsg = 'There is not enough storage!';
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} />
    );
  }
  return (
    <div className={classes.supplyPage}>
      <h3>CHOOSE_MISSION_SUPPLIES</h3>
      {alertPopUp}
      <div>
        current weight:
        {totalWeight}
      </div>
      <div>
        max weight:
        {maxStorage}
      </div>
      <br />
      <div>{supplyList}</div>
      <br />
      <button type="button" onClick={() => { changePage('supplyAdvice'); }}>Any advice on what should I take?</button>
      <button type="button" onClick={(e) => { const finalSupplies = getFinalSupplies(); changeFinalSupplies(e, finalSupplies); changePage('review'); }}>Review Equiptment</button>
    </div>
  );
};

export default ChooseSupplies;
