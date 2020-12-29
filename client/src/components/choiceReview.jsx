import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const ChoiceReview = ({
  changePage,
  crew,
  rover,
  supplyList,
}) => {
  console.log(rover);
  const crewList = crew.map((astro) => (
    <div key={astro} className={classes.reviewItem}>{astro}</div>
  ));
  const chosenRover = (
    <div>
      type:
      {rover.type}
      <br />
      max-speed:
      {rover.maxSpeed}
      <br />
      max-storage:
      {rover.storageCapacity}
    </div>
  );
  const chosenSupplies = supplyList.map((supply) => (
    <div key={supply.type} className={classes.reviewItem}>
      <div>{supply.type}</div>
      <div>{`how-many: ${supply.amount}`}</div>
    </div>
  ));
  return (
    <div className={classes.noticePage}>
      <h3>REVIEW_BEFORE_MISSION_LAUNCH</h3>
      <div className={classes.supplyBox}>
        <div>
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
        </div>
        <div>
          <div className={classes.reviewList}>
            supply list:
            {chosenSupplies}
          </div>
          <br />
        </div>
      </div>
      <div className={classes.supplyBox}>
        <button type="button" onClick={() => { changePage('main'); }}>Start Over</button>
        <button type="button" onClick={() => { changePage('landmark'); }}>Launch Mission</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ rover: state.rover });

export default connect(mapStateToProps)(ChoiceReview);
