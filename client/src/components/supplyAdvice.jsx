import React from 'react';

const SupplyAdvice = ({ changePage }) => {
  console.log('Supply Advice page fired');
  return (
    <div>
      <h3>This is the supply Advice page</h3>
      <button type="button" onClick={() => { changePage('supplies'); }}>Back to Supplies</button>
    </div>
  );
};

export default SupplyAdvice;
