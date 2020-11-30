import React from 'react';
// import data from '../../dist/data.json';
import classes from '../css/styles.css';

const StatusScreen = ({ crew, rover, supplyList }) => {
  const crewList = crew.map((astro) => (
    <li>{astro}</li>
  ));
  const roverStats = (
    <div>
      {`type: ${(rover.type).toUpperCase()} max-speed: ${rover.maxSpeed} max-storage: ${rover.storageCapacity}`}
    </div>
  );
  const currentSupplies = supplyList.map((supply) => (
    <div key={supply.type} className={classes.reviewItem}>
      <div>{supply.type}</div>
      <div>{`how-many: ${supply.amount}`}</div>
    </div>
  ));
  return (
    <div className={classes.statusScreen}>
      <div>{crewList}</div>
      <div>{roverStats}</div>
      <div>{currentSupplies}</div>
    </div>
  );
};

export default StatusScreen;
