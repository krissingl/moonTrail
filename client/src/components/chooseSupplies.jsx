import React, { useState } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage }) => {
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
        :
        {supplyAmountList[index]}
      </label>
      <div>
        <button type="button" value={supply.weight} onClick={(e) => minusOneSupply(e, supplyAmountFuncList[index], supplyAmountList[index])}>--</button>
        <button type="button" value={supply.weight} onClick={(e) => addOneSupply(e, supplyAmountFuncList[index], supplyAmountList[index])}>+</button>
      </div>
    </div>
  ));
  return (
    <div className={classes.supplyPage}>
      <h3>This is the Supply Choosing Page</h3>
      <button type="button">What should we take?</button>
      <div>{supplyList}</div>
      <button type="button" onClick={() => { changePage('landmark'); }}>Begin journey</button>
    </div>
  );
};

export default ChooseSupplies;

/*  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return [value, handleChange];
  };
        <form onSubmit={() => { changePage('landmark'); }}>
          {supplyList}
          <input type="submit" value="Begin Journey" />
        </form>
const [listedSupply, handleSupplyChange] = useInput('');
  const handleSupplyInputChange = (e) => {
    handleSupplyChange(e.target.value);
    console.log(listedSupply);
  };

*/