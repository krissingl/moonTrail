import React from 'react';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage }) => {
  const supplies = [{ type: 'Oxygen Tank', weight: 10 }, { type: 'Freeze-Dried-Food-Pack', weight: 1 }, { type: 'Water-Pouch', weight: 2 }, { type: 'Regular Clothes Set', weight: 3 }, { type: 'Warm Clothes Set', weight: 6 }, { type: 'Regular Space Suit', weight: 5 }, { type: 'Dust Proof Space Suit', weight: 10 }, { type: 'AI Maintenance Toolkit', weight: 5 }, { type: 'Rover Tire Patch', weight: 2 }, { type: 'Rover Maintenance Toolkit', weight: 8 }];
  const supplyList = supplies.map((supply) => (
    <div className={classes.supplyList}>
      <label>
        {supply.type}
        :
      </label>
      <input type="text" className={classes.supplyInput} weight={supply.weight} />
    </div>
  ));
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
