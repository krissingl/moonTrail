import React from 'react';
import landmarks from '../../dist/landmarks.json';

const Landmark = ({ changePage }) => {
  const { landmarkList } = landmarks;
  console.log(landmarkList.MareCrisium[0].name);
  // create landmark hook to change with every next landmark change
  return (
    <div>
      <h3>
        This is the Landmark page
      </h3>
      <button type="button" onClick={() => { changePage('traveling'); }}>Travel</button>
    </div>
  );
};

export default Landmark;
