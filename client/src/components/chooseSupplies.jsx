import React from 'react';

const ChooseSupplies = ({ changePage }) => {
  console.log('ChooseSupplies fired');
  return (
    <div>
      <h3>This is the Supply Choosing Page</h3>
      <button type="button" onClick={() => { changePage('landmark'); }}>Begin Journey</button>
    </div>
  );
};

export default ChooseSupplies;
