import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Fork = ({
  changePage,
  landmark,
  changeLandmark,
  changePreviousLandmark,
  changeTravelingStatus,
}) => {
  const { landmarkList } = data;
  const currentLandmark = landmark;
  const landmarkOption1 = landmarkList[landmark][0].next;
  const landmarkOption2 = landmarkList[landmark][1].next;

  return (
    <div className={classes.noticePage}>
      <h3>
        FORK_DETECTED_IN_ROUTE/WHICH_DIRECTION_SHOULD_THE_CREW_TAKE?
      </h3>
      <div className={classes.forkOptions}>
        <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption1); changePreviousLandmark(e, currentLandmark); changeTravelingStatus(e, true); changePage('traveling'); }}>{landmarkOption1}</button>
        <div className={classes.forkOR}>OR</div>
        <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption2); changePreviousLandmark(e, currentLandmark); changeTravelingStatus(e, true); changePage('traveling'); }}>{landmarkOption2}</button>
      </div>
    </div>
  );
};

export default Fork;
