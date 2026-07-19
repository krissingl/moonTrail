import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import supplyLabel from './supplyLabel.jsx';
import classes from '../css/styles.css';

const DROP_TABLE = [
  { key: 'oxygen', weight: 5 },
  { key: 'food', weight: 5 },
  { key: 'water', weight: 5 },
  { key: 'tirePatch', weight: 3 },
  { key: 'roverKit', weight: 3 },
  { key: 'clothes', weight: 2 },
];
const DROP_TOTAL = DROP_TABLE.reduce((sum, drop) => sum + drop.weight, 0);
const GAME_SECONDS = 12;
const randInt = (max) => Math.floor(Math.random() * max);

const rollDrop = () => {
  let roll = Math.random() * DROP_TOTAL;
  const found = DROP_TABLE.find((drop) => {
    roll -= drop.weight;
    return roll < 0;
  });
  return found ? found.key : DROP_TABLE[0].key;
};

const SearchResources = ({ changePage, dispatch, currentlyTraveling }) => {
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [aliens, setAliens] = useState([]);
  const [collected, setCollected] = useState({});
  const [caught, setCaught] = useState(0);
  const [flashes, setFlashes] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((remaining) => (remaining > 0 ? remaining - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setDone(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (done) {
      return undefined;
    }
    const spawner = setInterval(() => {
      const id = Date.now() + Math.random();
      setAliens((prev) => [...prev, { id, top: 10 + randInt(70), left: 5 + randInt(85) }]);
      setTimeout(() => {
        setAliens((prev) => prev.filter((alien) => alien.id !== id));
      }, 1300);
    }, 700);
    return () => clearInterval(spawner);
  }, [done]);

  const catchAlien = (alien) => {
    const drop = rollDrop();
    setCollected((prev) => ({ ...prev, [drop]: (prev[drop] || 0) + 1 }));
    setCaught((prev) => prev + 1);
    setAliens((prev) => prev.filter((item) => item.id !== alien.id));

    const flash = {
      id: alien.id,
      top: alien.top,
      left: alien.left,
      text: `+1 ${supplyLabel(drop)}`,
    };
    setFlashes((prev) => [...prev, flash]);
    setTimeout(() => {
      setFlashes((prev) => prev.filter((item) => item.id !== flash.id));
    }, 800);
  };

  const finish = () => {
    dispatch({ type: 'addSupplies', payload: collected });
    changePage(currentlyTraveling ? 'traveling' : 'landmark');
  };

  if (done) {
    const summary = Object.keys(collected);
    return (
      <div className={classes.noticePage}>
        <h3 className={classes.title}>SEARCH_COMPLETE</h3>
        <h5>{`ALIENS_CAUGHT: ${caught}`}</h5>
        <div className={classes.searchRewards}>
          {summary.length === 0
            ? <h5>THE ALIENS LEFT NOTHING BEHIND.</h5>
            : summary.map((key) => (
              <div key={key} className={classes.supplyCheckRow}>
                <span className={classes.supplyCheckName}>{supplyLabel(key)}</span>
                <span className={classes.supplyCheckAmount}>{`+${collected[key]}`}</span>
              </div>
            ))}
        </div>
        <button type="button" className={classes.wideActionBtn} onClick={finish}>RETURN_TO_MISSION</button>
      </div>
    );
  }

  return (
    <div className={classes.noticePage}>
      <h3 className={classes.title}>CATCH THE ALIENS FOR SUPPLY DROPS!</h3>
      <div className={classes.miniGameHud}>
        <span>{`TIME: ${timeLeft}`}</span>
        <span>{`CAUGHT: ${caught}`}</span>
      </div>
      <div className={classes.miniGameArea}>
        {aliens.map((alien) => (
          <button
            type="button"
            key={alien.id}
            className={classes.alienTarget}
            style={{ top: `${alien.top}%`, left: `${alien.left}%` }}
            onClick={() => catchAlien(alien)}
          >
            &#128126;
          </button>
        ))}
        {flashes.map((flash) => (
          <span
            key={flash.id}
            className={classes.catchFlash}
            style={{ top: `${flash.top}%`, left: `${flash.left}%` }}
          >
            {flash.text}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentlyTraveling: state.currentlyTraveling });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResources);
