/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const SupplyList = ({
  maxStorage,
  toggleAlert,
  totalWeight,
  changeTotalWeight,
  supplyAmountList,
  supplyAmountFuncList,
}) => {
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
  return (
    <div>{supplyList}</div>
  );
};

export default SupplyList;
