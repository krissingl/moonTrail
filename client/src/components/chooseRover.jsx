import React, { useState } from 'react';

const ChooseRover = ({ changePage, changeRover }) => {
  const rovers = [{ type: 'MiniCoup', storageCapacity: 200 }, { type: 'MiddleMan', storageCapacity: 350 }, { type: 'StationWagon', storageCapacity: 500 }];
  const roverList = rovers.map((rover) => (
    <option key={rover.type} value={rover.type}>{rover.type}</option>
  ));
  const [rover, handleRoverChange] = useState('MiniCoup');
  const findRover = (e) => {
    handleRoverChange(e.target.value);
  };
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
