import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const TitleMenu = ({ changePage, reset }) => (
  <div className={classes.alwaysMenu}>
    <button type="button" onClick={() => { reset(); changePage('main'); }}>MAIN MENU</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(TitleMenu);
