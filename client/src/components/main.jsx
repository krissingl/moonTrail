import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const Main = ({ changePage, test }) => (
  <div className={classes.noticePage}>
    <h1>WELCOME_TO_MOON_TRAIL</h1>
    <h3>{test}</h3>
    <button type="button" className={classes.startBtn} onClick={() => { changePage('intro'); }}>START</button>
  </div>
);

const mapStateToProps = (state) => ({ test: state.test });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
