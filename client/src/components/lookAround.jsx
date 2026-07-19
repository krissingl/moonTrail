import React from 'react';
import classes from '../css/styles.css';

const LookAround = ({ changePage }) => (
  <div className={classes.noticePage}>
    <h3 className={classes.title}>YOU GAZE OUT ACROSS THE LUNAR EXPANSE</h3>
    <h5>DISTANT GALAXIES SHIMMER BEYOND THE CRATER RIM.</h5>
    <h5>[ SCENIC PIXEL ART COMING SOON ]</h5>
    <button type="button" onClick={() => changePage('landmark')}>RETURN</button>
  </div>
);

export default LookAround;
