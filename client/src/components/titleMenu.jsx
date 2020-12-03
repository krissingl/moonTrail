import React from 'react';
import classes from '../css/styles.css';

const TitleMenu = ({ changePage, reset }) => (
  <div className={classes.alwaysMenu}>
    <button type="button" onClick={() => { reset(); changePage('main'); }}>MAIN MENU</button>
  </div>
);

export default TitleMenu;
