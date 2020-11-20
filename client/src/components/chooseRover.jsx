import React, { useState } from 'react';

const ChooseRover = ({ changePage }) => {
  const rovers = ['MiniCoup', 'MiddleMan', 'StationWagon'];
  const roverList = rovers.map((rover) => (
  <option key={rover} value={rover}>{rover}</option>
  ));
  const [rover, handleRoverChange] = useState('')
  const findRover = (e) => {
    handleRoverChange(e.target.value);
  }
  return (
    <div>
      <h3>This is the Rover Choosing Page</h3>
      <div>
        <span>Select Rover:</span>
        <select onChange={findRover}>
          {roverList}
        </select>
      </div>
      <button onClick={() => { changePage('supplies'); }} >Choose Supplies</button>
    </div>
  )
}

export default ChooseRover;
