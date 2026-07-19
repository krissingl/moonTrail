import React, { useState } from 'react';
import { connect } from 'react-redux';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const pickLivingIndex = (crew) => {
  const living = crew
    .map((member, index) => (member.health > 0 ? index : -1))
    .filter((index) => index !== -1);
  if (!living.length) {
    return null;
  }
  return living[Math.floor(Math.random() * living.length)];
};

const Event = ({
  changePage,
  dispatch,
  crew,
  supplyObj,
}) => {
  const { randomEventsList } = data;
  const [event] = useState(
    () => randomEventsList[Math.floor(Math.random() * randomEventsList.length)],
  );
  const [memberIndex] = useState(() => pickLivingIndex(crew));

  const memberName = memberIndex !== null ? crew[memberIndex].name : 'A CREWMATE';
  const message = event.message.replace('{name}', memberName);

  let outcome = '';
  if (event.effect.kind === 'roverBreakdown') {
    const kit = supplyObj[event.effect.requires];
    outcome = kit && kit.amount > 0
      ? `LUCKILY YOU HAD A REPAIR KIT. THE ${event.effect.part} IS REPAIRED.`
      : 'WITHOUT THE RIGHT REPAIR KIT, THE ROVER TAKES LASTING DAMAGE.';
  } else if (event.effect.kind === 'affliction') {
    outcome = 'STOP TO REST AND TREAT THEM, OR THEY WILL WORSEN.';
  }

  const onContinue = () => {
    dispatch({ type: 'resolveEvent', payload: { effect: event.effect, memberIndex } });
    changePage('traveling');
  };

  return (
    <div className={classes.noticePage}>
      <h5>{message}</h5>
      {outcome ? <h5>{outcome}</h5> : null}
      <button type="button" onClick={onContinue}>CONTINUE</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  crew: state.crew,
  supplyObj: state.supplyObj,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);
