import React from 'react';
import mapImg from '../../dist/extras/moonPathImgs/map.png';
import classes from '../css/styles.css';

const Map = () => {
  console.log('Map fireed');
  return (
    <span>
      <img className={classes.mapImg} src={mapImg} alt="roverGif" />
    </span>
  );
};

export default Map;
