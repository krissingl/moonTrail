/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const NameAstros = ({ changePage, dispatch }) => {
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

  const isEnabled = (astro1.length > 0)
    && (astro2.length > 0)
    && (astro3.length > 0)
    && (astro4.length > 0)
    && (astro5.length > 0);

  const createCrewList = () => {
    const crewList = [astro1, astro2, astro3, astro4, astro5];
    return crewList;
  };

  const addCrewToGlobalState = (newCrewList) => {
    dispatch({
      type: 'changeCrew',
      payload: newCrewList,
    });
  };

  return (
    <div className={classes.noticePage}>
      <h3>IDENTIFY_THE_ASTRONAUTS_ON_THIS_MISSION</h3>
      <div>
        <form
          className={classes.crewNames}
          onSubmit={() => { addCrewToGlobalState(createCrewList()); changePage('rover'); }}
        >
          <label>
            CREW_MEMBER_1:
            <input type="text" value={astro1} onChange={changeAstro1} />
          </label>
          <label>
            CREW_MEMBER_2:
            <input type="text" value={astro2} onChange={changeAstro2} />
          </label>
          <label>
            CREW_MEMBER_3:
            <input type="text" value={astro3} onChange={changeAstro3} />
          </label>
          <label>
            CREW_MEMBER_4:
            <input type="text" value={astro4} onChange={changeAstro4} />
          </label>
          <label>
            CREW_MEMBER_5:
            <input type="text" value={astro5} onChange={changeAstro5} />
          </label>
          <br />
          <input type="submit" value="Choose Rover" className={classes.nameAstrosSubmitBtn} disabled={!isEnabled} />
        </form>
      </div>
    </div>
  );
};

// disabled={!isEnabled} <-- THIS GOES ON SUBMIT INPUT

const mapStateToProps = (state) => ({ crew: state.crew });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameAstros);
