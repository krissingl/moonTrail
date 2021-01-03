import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const TitleMenu = ({ changePage, dispatch }) => {
  const resetGlobalState = () => {
    dispatch({
      type: 'reset',
      payload: 'blah',
    });
  };
  return (
    <div className={classes.alwaysMenu}>
      <button type="button" onClick={() => { resetGlobalState(); changePage('main'); }}>MAIN MENU</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(TitleMenu);
