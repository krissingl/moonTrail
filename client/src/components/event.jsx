import React, { useState } from 'react';
import { connect } from 'react-redux';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const Event = ({ changePage, dispatch }) => {
  const { randomEventsList } = data;
  const randomIndex = Math.floor((Math.random() * randomEventsList.length));

  const [randomEventMsg] = useState(randomEventsList[randomIndex].message);
  const [randomEventConseq] = useState(randomEventsList[randomIndex].consequence[0]);

  const changeEventConseq = (consequence) => {
    dispatch({
      type: 'changeEventConseq',
      payload: consequence,
    });
  };

  return (
    <div className={classes.noticePage}>
      <h5>{randomEventMsg}</h5>
      <button type="button" onClick={() => { changeEventConseq(randomEventConseq); changePage('traveling'); }}>CONTINUE</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Event);
