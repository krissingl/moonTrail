import React, { useState } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage }) => {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return [value, handleChange];
  };
  const supplyList = data.supplyList.map((supply) => (
    <div className={classes.supplyList}>
      <label>
        {supply.type}
        :
      </label>
      <input type="text" className={classes.supplyInput} weight={supply.weight} onChange={} />
    </div>
  ));
  const [oxygen, handleOxyChange] = useState('MiniCoup');
  const findRover = (e) => {
    handleRoverChange(e.target.value);
  };
  return (
    <div>
      <h3>This is the Supply Choosing Page</h3>
      <button type="button">What should I take?</button>
      <div>
        <form onSubmit={() => { changePage('landmark'); }}>
          {supplyList}
          <input type="submit" value="Begin Journey" />
        </form>
      </div>
    </div>
  );
};

export default ChooseSupplies;
