import React, { useState } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage }) => {
  const [totalWeight, changeTotalWeight] = useState(0);
  const [oxy, changeOxyAmount] = useState(0);
  const addOneSupply = (e) => {
    changeTotalWeight(totalWeight + Number(e.target.value));
    changeOxyAmount(oxy + 1);
    console.log(totalWeight);
    console.log(oxy);
  };
  const minusOneSupply = (e) => {
    changeTotalWeight(totalWeight - Number(e.target.value));
    changeOxyAmount(oxy - 1);
    console.log(totalWeight);
    console.log(oxy);
  };
  const supplyList = data.supplyList.map((supply) => (
    <div className={classes.supplyList}>
      <label>
        {supply.type}
        :
        {oxy}
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