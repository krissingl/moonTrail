import React from 'react';
import data from '../../dist/data.json';

const Fork = ({ changePage, landmark, changeLandmark }) => {
  const { landmarkList } = data;
  const landmarkOption1 = landmarkList[landmark][0].next;
  const landmarkOption2 = landmarkList[landmark][1].next;

  return (
    <div>
      <h3>
        THERE IS A FORK IN THE ROAD. WHICH DIRECTION WILL YOU TAKE?
      </h3>
      <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption1); changePage('traveling'); }}>{landmarkOption1}</button>
      <button type="button" onClick={(e) => { changeLandmark(e, landmarkOption2); changePage('traveling'); }}>{landmarkOption2}</button>
    </div>
  );
};

export default Fork;
