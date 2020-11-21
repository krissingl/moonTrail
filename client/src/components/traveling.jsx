import React from 'react';

const TravelingPage = ({ changePage }) => {
  console.log('TravelPage fired');
  return (
    <div>
      <h3>
        This is the Traveling screen
      </h3>
      <button type="button" onClick={() => { changePage('landmark'); }}>Arrive at Landmark</button>
    </div>
  );
};

export default TravelingPage;
