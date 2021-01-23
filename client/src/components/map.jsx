import React from 'react';
import { connect } from 'react-redux';
import generalMap from '../../dist/extras/moonPathImgs/map.png';
import pliniusForkMap from '../../dist/extras/moonPathImgs/fork_plinius.png';
import maniForkMap from '../../dist/extras/moonPathImgs/fork_mani.png';
import arisForkMap from '../../dist/extras/moonPathImgs/fork_aris.png';
import classes from '../css/styles.css';

const Map = ({ landmark }) => {
  let mapImg;
  let stylingClass = classes.mapImg;
  if (landmark === 'PLINIUS') {
    mapImg = pliniusForkMap;
  } else if (landmark === 'MANILIUS') {
    mapImg = maniForkMap;
  } else if (landmark === 'ARISTILLUS') {
    mapImg = arisForkMap;
  } else {
    mapImg = generalMap;
    stylingClass = classes.mapImgGen;
  }

  return (
    <span>
      <img className={stylingClass} src={mapImg} alt="map" />
    </span>
  );
};

const mapStateToProps = (state) => ({ landmark: state.landmark });

export default connect(mapStateToProps)(Map);
