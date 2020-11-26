/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classes from '../css/styles.css';

const NameAstros = ({ changePage, changeCrew }) => {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return [value, handleChange];
  };
  const [astro1, changeAstro1] = useInput('');
  const [astro2, changeAstro2] = useInput('');
  const [astro3, changeAstro3] = useInput('');
  const [astro4, changeAstro4] = useInput('');
  const [astro5, changeAstro5] = useInput('');

  const createCrewList = () => {
    const crewList = [astro1, astro2, astro3, astro4, astro5];
    return crewList;
  };

  return (
    <div>
      <h3>WHAT ARE THE NAMES OF THE ASTRONAUTS ON THIS MISSION?</h3>
      <div>
        <form
          className={classes.crewNames}
          onSubmit={(e) => { const crewList = createCrewList(); changeCrew(e, crewList); changePage('rover'); }}
        >
          <label>
            Crew Member 1:
            <input type="text" value={astro1} onChange={changeAstro1} />
          </label>
          <label>
            Crew Member 2:
            <input type="text" value={astro2} onChange={changeAstro2} />
          </label>
          <label>
            Crew Member 3:
            <input type="text" value={astro3} onChange={changeAstro3} />
          </label>
          <label>
            Crew Member 4:
            <input type="text" value={astro4} onChange={changeAstro4} />
          </label>
          <label>
            Crew Member 5:
            <input type="text" value={astro5} onChange={changeAstro5} />
          </label>
          <input type="submit" value="Choose Rover" />
        </form>
      </div>
    </div>
  );
};

export default NameAstros;
