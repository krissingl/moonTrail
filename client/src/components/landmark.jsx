import React from 'react';
import data from '../../dist/data.json';

const Landmark = ({ changePage, landmark, changeLandmark }) => {
  const { landmarkList } = data;
  const nextLandmark = landmarkList[landmark][0].next;

  console.log(nextLandmark);
  // create landmark hook to change with every next landmark change
  return (
    <div>
      <h3>
        {`YOU HAVE ARRIVED AT ${landmark}`}
      </h3>
      <button type="button">LOOK AROUND</button>
      <button type="button">ATTEMPT CONTACT WITH GROUND CONTROL</button>
      <button type="button">ATTEMPT CAAB DEBUG</button>
      <button type="button" onClick={(e) => { changeLandmark(e, nextLandmark); changePage('traveling'); }}>CONTINUE MISSION</button>
    </div>
  );
};

export default Landmark;
