import React from 'react';
import { connect } from 'react-redux';
import pliniusForkMap from '../../dist/extras/moonPathImgs/fork_plinius.png';
import maniForkMap from '../../dist/extras/moonPathImgs/fork_mani.png';
import arisForkMap from '../../dist/extras/moonPathImgs/fork_aris.png';
import classes from '../css/styles.css';

const Map = ({ landmark }) => {
  console.log(landmark);
  let mapImg;
  if (landmark === 'PLINIUS') {
    mapImg = pliniusForkMap;
  } else if (landmark === 'MANILIUS') {
    mapImg = maniForkMap;
  } else {
    mapImg = arisForkMap;
  }

  return (
    <span>
      <img className={classes.mapImg} src={mapImg} alt="map" />
    </span>
  );
};

const mapStateToProps = (state) => ({ landmark: state.landmark });

export default connect(mapStateToProps)(Map);
