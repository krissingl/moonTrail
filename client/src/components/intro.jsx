import React from 'react';

const Intro = ({ changePage }) => {
  console.log('ChooseSupplies fired');
  return (
    <div>
      <h3>This is the Intro Page</h3>
      <button type="button" onClick={() => { changePage('naming'); }}>Begin</button>
    </div>
  );
};

export default Intro;
