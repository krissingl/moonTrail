import React, { useState } from 'react';
import { connect } from 'react-redux';
import bug from '../../dist/extras/rovers/bug.gif';
import jeep from '../../dist/extras/rovers/jeep.gif';
import stationWag from '../../dist/extras/rovers/stationWagon.gif';
import classes from '../css/styles.css';

const ChooseRover = ({ dispatch, changePage }) => {
  // List function for drop-menu
  const rovers = ['StationWagon', 'MiddleMan', 'MiniCoup'];
  const roverList = rovers.map((roverType) => (
    <option key={roverType} value={roverType}>{roverType}</option>
  ));
  // Getting rover from user chose from drop menu and setting speed and storage properties
  const [localRover, handleLocalRoverChange] = useState('StationWagon');
  const findRover = (e) => {
    handleLocalRoverChange(e.target.value);
  };
  let storageCapacity;
  let maxSpeed;
  let roverImg;
  if (localRover === 'MiniCoup') {
    storageCapacity = 400;
    maxSpeed = 10;
    roverImg = (
      <div>
        <img className={classes.bugRoverImg} src={bug} alt="roverGif" />
      </div>
    );
  } else if (localRover === 'MiddleMan') {
    storageCapacity = 500;
    maxSpeed = 7;
    roverImg = (
      <div>
        <img className={classes.jeepRoverImg} src={jeep} alt="roverGif" />
      </div>
    );
  } else if (localRover === 'StationWagon') {
    storageCapacity = 700;
    maxSpeed = 5;
    roverImg = (
      <div>
        <img className={classes.sWRoverImg} src={stationWag} alt="roverGif" />
      </div>
    );
  }
  // Tying it all together to make a rover Object
  const getRoverObject = () => {
    const roverObj = {
      type: localRover,
      maxSpeed,
      storageCapacity,
    };
    return roverObj;
  };

  // Change rover in redux store dispatch
  const changeGlobalRover = (newGlobalRover) => {
    dispatch({
      type: 'changeRover',
      payload: newGlobalRover,
    });
  };

  return (
    <div className={classes.noticePage}>
      <h3>CHOOSE_ROVER_FOR_MISSION</h3>
      <div>
        <span>Select Rover:</span>
        <select onChange={findRover}>
          {roverList}
        </select>
      </div>
      <div>
        <h5>{localRover}</h5>
        {roverImg}
        <div>{`MAXIMUM SPEED: ${maxSpeed}`}</div>
        <div>{`MAXIMUM STORAGE CAPACITY: ${storageCapacity}`}</div>
      </div>
      <br />
      <button type="button" onClick={() => { changeGlobalRover(getRoverObject()); changePage('supplies'); }}>Choose Supplies</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ rover: state.rover });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseRover);
