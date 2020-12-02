import React from 'react';
import classes from '../css/styles.css';

const Gameover = () => {
  let finalScreen;
  if (true) {
    finalScreen = (
      <div className={classes.noticePage}>
        <h3>CONGRATULATIONS_YOU_ARE_ENROUTE_HOME!</h3>
        <h5>FINAL SCORE COUNT HERE</h5>
      </div>
    );
  }
  return (
    <div>
      {finalScreen}
    </div>
  );
};

export default Gameover;
