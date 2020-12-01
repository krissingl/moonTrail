import React from 'react';
import data from '../../dist/data.json';

const Fork = ({
  changePage,
  landmark,
  changeLandmark,
  changeTravelingStatus,
}) => {
  const { landmarkList } = data;
  const landmarkOption1 = landmarkList[landmark][0].next;
  const landmarkOption2 = landmarkList[landmark][1].next;

  return (
    <div>
      <h3>
        FORK_DETECTED_IN_ROUTE/WHICH_DIRECTION_SHOULD_THE_CREW_TAKE?
      </h3>
      <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption1); changeTravelingStatus(e, true); changePage('traveling'); }}>{landmarkOption1}</button>
      <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption2); changeTravelingStatus(e, true); changePage('traveling'); }}>{landmarkOption2}</button>
    </div>
  );
};

export default Fork;
