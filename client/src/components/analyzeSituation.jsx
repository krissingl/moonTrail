import React from 'react';

const Analyzation = ({ changePage }) => {
  console.log('Analyzation page fired');
  return (
    <div>
      <h3>
        Analyzation Page
      </h3>
      <button type="button">STOP_TO_REST</button>
      <button type="button">ALTER_CREW_RATIONS</button>
      <button type="button">ALTER_ROVER_SPEED</button>
      <button type="button">SEARCH_FOR_RESOURCES</button>
      <button type="button">CHECK_MAP</button>
      <button type="button">CHECK_CREW_SUPPLIES</button>
      <button type="button" onClick={() => { changePage('traveling'); }}>CONTINUE MISSION</button>
    </div>
  );
};

export default Analyzation;
