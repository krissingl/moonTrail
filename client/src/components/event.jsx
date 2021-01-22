import React, { useState } from 'react';
import { connect } from 'react-redux';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Event = ({ changePage }) => {
  const { randomEventsList } = data;
  const randomIndex = Math.floor((Math.random() * randomEventsList.length));

  const [randomEvent] = useState(randomEventsList[randomIndex].message);

  return (
    <div className={classes.noticePage}>
      <h5>{randomEvent}</h5>
      <button type="button" onClick={() => { changePage('traveling'); }}>CONTINUE</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Event);
