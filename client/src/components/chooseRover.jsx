import React, { useState } from 'react';
import classes from '../css/styles.css';
import bug from '../../dist/extras/rovers/bug.gif';
import jeep from '../../dist/extras/rovers/jeep.gif';
import stationWag from '../../dist/extras/rovers/stationWagon.gif';

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
  let roverImg;
  if (rover === 'MiniCoup') {
    storageCapacity = 400;
    maxSpeed = 10;
    roverImg = (
      <div>
        <img className={classes.bugRoverImg} src={bug} alt="roverGif" />
      </div>
    );
  } else if (rover === 'MiddleMan') {
    storageCapacity = 500;
    maxSpeed = 7;
    roverImg = (
      <div>
        <img className={classes.jeepRoverImg} src={jeep} alt="roverGif" />
      </div>
    );
  } else if (rover === 'StationWagon') {
    storageCapacity = 700;
    maxSpeed = 5;
    roverImg = (
      <div>
        <img className={classes.sWRoverImg} src={stationWag} alt="roverGif" />
      </div>
    );
  }
  const getRoverObject = () => {
    const roverObj = {
      type: rover,
      maxSpeed,
      storageCapacity,
    };
    return roverObj;
  };
  return (
    <div>
      <h3>CHOOSE A ROVER TO USE FOR THIS MISSION</h3>
      <div>
        <span>Select Rover:</span>
        <select onChange={findRover}>
          {roverList}
        </select>
      </div>
      <div>
        <h5>{rover}</h5>
        {roverImg}
        <div>{`MAXIMUM STORAGE CAPACITY: ${storageCapacity}`}</div>
        <div>{`MAXIMUM SPEED: ${maxSpeed}`}</div>
      </div>
      <button type="button" onClick={(e) => { const finalRover = getRoverObject(); changeRover(e, finalRover); changePage('supplies'); }}>Choose Supplies</button>
    </div>
  );
};

export default ChooseRover;
