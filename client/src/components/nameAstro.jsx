/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from '../css/styles.css';

const NameAstros = ({ changePage }) => {
  console.log('NameAstros fired');
  return (
    <div>
      <h3>This is the Naming Astronaunts Page</h3>
      <div>
        <form className={classes.crewNames}>
          <label>Crew Member 1:</label>
          <input type="text" placeholder="Enter Crew Member Name" />
          <label>Crew Member 2:</label>
          <input type="text" placeholder="Enter Crew Member Name" />
          <label>Crew Member 3:</label>
          <input type="text" placeholder="Enter Crew Member Name" />
          <label>Crew Member 4:</label>
          <input type="text" placeholder="Enter Crew Member Name" />
          <label>Crew Member 5:</label>
          <input type="text" placeholder="Enter Crew Member Name" />
        </form>
      </div>
      <button type="button" onClick={() => { changePage('rover'); }}>Choose Rover</button>
    </div>
  );
};

export default NameAstros;
