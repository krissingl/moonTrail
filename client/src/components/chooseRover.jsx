import React, { useState } from 'react';

const ChooseRover = ({ changePage, changeRover }) => {
  const rovers = ['MiniCoup', 'MiddleMan', 'StationWagon'];
  const roverList = rovers.map((rover) => (
    <option key={rover} value={rover}>{rover}</option>
  ));
  const [rover, handleRoverChange] = useState('MiniCoup');
  const findRover = (e) => {
    handleRoverChange(e.target.value);
  };
  let storageCapacity;
  let maxSpeed;
  if (rover === 'MiniCoup') {
    storageCapacity = 400;
    maxSpeed = 10;
  } else if (rover === 'MiddleMan') {
    storageCapacity = 500;
    maxSpeed = 7;
  } else if (rover === 'StationWagon') {
    storageCapacity = 700;
    maxSpeed = 5;
  }
  console.log(`Current storage capacity: ${storageCapacity} and max speed: ${maxSpeed}`);
  return (
    <div>
      <h3>Choose the best Rover for your journey!</h3>
      <div>
        <span>Select Rover:</span>
        <select onChange={findRover}>
          {roverList}
        </select>
      </div>
      <button type="button" onClick={(e) => { changeRover(e, rover); changePage('supplies'); }}>Choose Supplies</button>
    </div>
  );
};

export default ChooseRover;
