import React from 'react';
import classes from '../css/styles.css';

const ChoiceReview = ({
  changePage,
  crew,
  rover,
  supplyList,
}) => {
  const crewList = crew.map((astro) => (
    <div key={astro} className={classes.reviewItem}>{astro}</div>
  ));
  const chosenRover = `type: ${rover.type} max-speed: ${rover.maxSpeed} max-storage: ${rover.storageCapacity}`;
  const chosenSupplies = supplyList.map((supply) => (
    <div key={supply.type} className={classes.reviewItem}>
      <div>{supply.type}</div>
      <div>{`how-many: ${supply.amount}`}</div>
    </div>
  ));
  return (
    <div>
      <h3>REVIEW BEFORE MISSION LAUNCH</h3>
      <div className={classes.reviewList}>
        crew list:
        {crewList}
      </div>
      <br />
      <div className={classes.reviewList}>
        rover:
        <br />
        <div className={classes.reviewItem}>
          {chosenRover}
        </div>
      </div>
      <br />
      <div className={classes.reviewList}>
        supply list:
        {chosenSupplies}
      </div>
      <br />
      <button type="button" onClick={() => { changePage('main'); }}>Start Over</button>
      <button type="button" onClick={() => { changePage('landmark'); }}>Begin the Mission!</button>
    </div>
  );
};

export default ChoiceReview;
