/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classes from '../css/styles.css';

const NameAstros = ({ changePage, changeCrew }) => {
  const [astros, changeAstros] = useState(['', '', '', '', '']);
  // const changeAstros = (e) => {
  //   const index = e.target.id;
  //   astros[index] = e.target.value;
  // };
  console.log(astros[0]);
  return (
    <div>
      <h3>This is the Naming Astronaunts Page</h3>
      <div>
        <form className={classes.crewNames}>
          <label>
            Crew Member 1:
            <input type="text" id={0} value={astros[0]} onChange={changeAstros} />
          </label>
          <label>
            Crew Member 2:
            <input type="text" placeholder="Enter Crew Member Name" />
          </label>
          <label>
            Crew Member 3:
            <input type="text" placeholder="Enter Crew Member Name" />
          </label>
          <label>
            Crew Member 4:
            <input type="text" placeholder="Enter Crew Member Name" />
          </label>
          <label>
            Crew Member 5:
            <input type="text" placeholder="Enter Crew Member Name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <button type="button" onClick={() => { changePage('rover'); }}>Choose Rover</button>
    </div>
  );
};

export default NameAstros;
