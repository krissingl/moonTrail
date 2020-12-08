import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const SupplyAdvice = ({ changePage }) => {
  const advice = data.supplyAdvice;
  return (
    <div className={classes.noticePage}>
      <h3>RECOMMENDED_SUPLLIES_FOR_THIS_MISSION:</h3>
      <br />
      <div>
        {advice}
      </div>
      <br />
      <button type="button" onClick={() => { changePage('supplies'); }}>BACK TO SUPPLIES</button>
    </div>
  );
};

export default SupplyAdvice;
