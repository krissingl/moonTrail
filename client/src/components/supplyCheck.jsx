import React from 'react';
import classes from '../css/styles.css';

const SupplyCheck = ({ supplies }) => {
  const currentSupplies = supplies.map((supply) => (
    <div key={supply.type} className={classes.reviewItem}>
      <div>{supply.type}</div>
      <div>{`how-many: ${supply.amount}`}</div>
    </div>
  ));
  return (
    <div>{currentSupplies}</div>
  );
};

export default SupplyCheck;
