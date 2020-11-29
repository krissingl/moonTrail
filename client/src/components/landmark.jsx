import React from 'react';
import data from '../../dist/data.json';

const Landmark = ({ changePage }) => {
  const { landmarkList } = data;
  console.log(landmarkList.MARE_CRISIUM.next);
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
