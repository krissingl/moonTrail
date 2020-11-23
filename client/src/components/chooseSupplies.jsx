import React from 'react';

const ChooseSupplies = ({ changePage }) => {
  const supplies = [{ type: 'Oxygen Tank', weight: 10 }, { type: 'Freeze-Dried-Food-Pack', weight: 1 }, { type: 'Water-Pouch', weight: 2 }, { type: 'Regular Clothes Set', weight: 3 }, { type: 'Warm Clothes Set', weight: 6 }, { type: 'Regular Space Suit', weight: 5 }, { type: 'Dust Proof Space Suit', weight: 10 }, { type: 'AI Maintenance Toolkit', weight: 5 }, { type: 'Rover Tire Patch', weight: 2 }, { type: 'Rover Maintenance Toolkit', weight: 8 }];
  return (
    <div>
      <h3>This is the Supply Choosing Page</h3>
      <button type="button" onClick={() => { changePage('landmark'); }}>Begin Journey</button>
    </div>
  );
};

export default ChooseSupplies;
