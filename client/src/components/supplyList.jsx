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

/*
  // const getFinalSupplyObj = (supplyList, amountList) => {
  //   const supplyObj = {
  //     oxygen:
  //     { type: supplyList[0].type, weight: supplyList[0].weight, amount: amountList[0] },
  //     food:
  //     { type: supplyList[1].type, weight: supplyList[1].weight, amount: amountList[1] },
  //     water:
  //     { type: supplyList[2].type, weight: supplyList[2].weight, amount: amountList[2] },
  //     clothes:
  //     { type: supplyList[3].type, weight: supplyList[3].weight, amount: amountList[3] },
  //     clothes2:
  //     { type: supplyList[4].type, weight: supplyList[4].weight, amount: amountList[4] },
  //     spaceSuit:
  //     { type: supplyList[5].type, weight: supplyList[5].weight, amount: amountList[5] },
  //     spaceSuit2:
  //     { type: supplyList[6].type, weight: supplyList[6].weight, amount: amountList[6] },
  //     aiKit:
  //     { type: supplyList[7].type, weight: supplyList[7].weight, amount: amountList[7] },
  //     tirePatch:
  //     { type: supplyList[8].type, weight: supplyList[8].weight, amount: amountList[8] },
  //     roverKit:
  //     { type: supplyList[9].type, weight: supplyList[9].weight, amount: amountList[9] },
  //   };
  //   return supplyObj;
  // };
*/