/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage, changeFinalSupplies }) => {
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
    changeTotalWeight(totalWeight + Number(e.target.value));
    callback(value + 1);
  };
  const minusOneSupply = (e, callback, value) => {
    changeTotalWeight(totalWeight - Number(e.target.value));
    callback(value - 1);
  };
  const supplyList = data.supplyList.map((supply, index) => (
    <div className={classes.supplyList}>
      <label>
        {supply.type}
        (weight:
        {supply.weight}
        ):
        {supplyAmountList[index]}
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
  return (
    <div className={classes.supplyPage}>
      <h3>This is the Supply Choosing Page</h3>
      <div>
        Current Weight:
        {totalWeight}
      </div>
      <div>{supplyList}</div>
      <button type="button" onClick={() => { changePage('supplyAdvice'); }}>Any advice on what should I take?</button>
      <button type="button" onClick={(e) => { const finalSupplies = getFinalSupplies(); changeFinalSupplies(e, finalSupplies); changePage('review'); }}>Review</button>
    </div>
  );
};

export default ChooseSupplies;
