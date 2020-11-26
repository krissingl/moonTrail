import React from 'react';
import data from '../../dist/data.json';

const Intro = ({ changePage }) => {
  const intro = data.introVerbiage;
  return (
    <div>
      <h2>SITUATION DEBRIEFING</h2>
      <p>{intro}</p>
      <button type="button" onClick={() => { changePage('naming'); }}>Begin</button>
    </div>
  );
};

export default Intro;
