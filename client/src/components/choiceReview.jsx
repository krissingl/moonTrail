import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const ChoiceReview = ({
  changePage,
  crew,
  rover,
  supplyList,
}) => {
  // CREW LIST
  const crewList = crew.map((astro) => (
    <div key={astro} className={classes.reviewItem}>{astro}</div>
  ));

  // ROVER INFO
  const chosenRover = (
    <div>
      type: 
      {rover.type}
      <br />
      max_speed: 
      {rover.maxSpeed}
      <br />
      max_storage: 
      {rover.storageCapacity}
    </div>
  );

  // SUPPLY LIST
  const chosenSupplies = supplyList.map((supply) => (
    <div key={supply.type} className={classes.reviewItem}>
      <div><b>{supply.type}</b></div>
      <div>{`quantity: ${supply.amount}`}</div>
    </div>
  ));

  return (
    <div className={classes.noticePage}>
      <h3 className={classes.title}>REVIEW_BEFORE_MISSION_LAUNCH</h3>
      <div className={classes.supplyBox}>
        <div>
          <div className={classes.reviewList}>
            <label className={classes.reviewLabel}>CREW_LIST:</label>
            {crewList}
          </div>
          <br />
          <div className={classes.reviewList}>
            <label className={classes.reviewLabel}>ROVER:</label>
            <br />
            <div className={classes.reviewItem}>
              {chosenRover}
            </div>
          </div>
          <br />
        </div>
        <div>
          <div className={classes.reviewList}>
            <label className={classes.reviewLabel}>SUPPLY_LIST:</label>
            {chosenSupplies}
          </div>
          <br />
        </div>
      </div>
      <div>
        <nobr>
          <button type="button" className={classes.supplyBoxBtns} onClick={() => { changePage('main'); }}>START_OVER</button>
          <button type="button" className={classes.supplyBoxBtns} onClick={() => { changePage('landmark'); }}>LAUNCH_MISSION</button>
        </nobr>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  crew: state.crew,
  rover: state.rover,
  supplyList: state.supplyList,
});

export default connect(mapStateToProps)(ChoiceReview);
