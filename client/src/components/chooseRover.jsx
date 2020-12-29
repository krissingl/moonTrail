import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';
import bug from '../../dist/extras/rovers/bug.gif';
import jeep from '../../dist/extras/rovers/jeep.gif';
import stationWag from '../../dist/extras/rovers/stationWagon.gif';

const ChooseRover = ({ dispatch, changePage, rover }) => {
  const rovers = ['StationWagon', 'MiddleMan', 'MiniCoup'];
  const roverList = rovers.map((roverType) => (
    <option key={roverType} value={roverType}>{roverType}</option>
  ));
  const [localRover, handleRoverChange] = useState('StationWagon');
  const findRover = (e) => {
    handleRoverChange(e.target.value);
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
  const getRoverObject = () => {
    const roverObj = {
      type: rover,
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
        <h5>{rover}</h5>
        {roverImg}
        <div>{`MAXIMUM SPEED: ${maxSpeed}`}</div>
        <div>{`MAXIMUM STORAGE CAPACITY: ${storageCapacity}`}</div>
      </div>
      <br />
      <button type="button" onClick={() => { const finalRover = getRoverObject(); changePage('supplies'); }}>Choose Supplies</button>
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
