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
  const addOneSupply = (e) => {
    changeTotalWeight(totalWeight + Number(e.target.value));
    changeOxyAmount(oxyAmount + 1);
  };
  const minusOneSupply = (e) => {
    changeTotalWeight(totalWeight - Number(e.target.value));
    changeOxyAmount(oxyAmount - 1);
  };
  const supplyList = data.supplyList.map((supply) => (
    <div className={classes.supplyList}>
      <label>
        {supply.type}
        :
        {oxyAmount}
      </label>
      <div>
        <button type="button" value={supply.weight} onClick={minusOneSupply}>--</button>
        <button type="button" value={supply.weight} onClick={addOneSupply}>+</button>
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