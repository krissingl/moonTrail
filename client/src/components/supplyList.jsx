/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const HOLD_DELAY = 400;
const HOLD_INTERVAL = 90;

const SupplyList = ({
  maxStorage,
  toggleAlert,
  amounts,
  setAmount,
}) => {
  const holdTimers = useRef([]);
  const amountsRef = useRef(amounts);
  amountsRef.current = amounts;

  const stopHold = () => {
    holdTimers.current.forEach(clearTimeout);
    holdTimers.current.forEach(clearInterval);
    holdTimers.current = [];
  };

  useEffect(() => stopHold, []);

  const startHold = (step) => {
    step();
    const delay = setTimeout(() => {
      const repeat = setInterval(step, HOLD_INTERVAL);
      holdTimers.current.push(repeat);
    }, HOLD_DELAY);
    holdTimers.current.push(delay);
  };

  const currentWeight = () => data.supplyList.reduce(
    (sum, supply) => sum + (amountsRef.current[supply.key] * supply.weight),
    0,
  );

  const addOneSupply = (supply) => {
    if ((currentWeight() + supply.weight) <= maxStorage) {
      setAmount(supply.key, amountsRef.current[supply.key] + 1);
    } else {
      stopHold();
      toggleAlert(true);
    }
  };

  const minusOneSupply = (supply) => {
    if (amountsRef.current[supply.key] > 0) {
      setAmount(supply.key, amountsRef.current[supply.key] - 1);
    } else {
      stopHold();
    }
  };

  const supplyList = data.supplyList.map((supply) => (
    <div className={classes.supplyItem} key={supply.key}>
      <label className={classes.supplyItemLabel}>
        {`${supply.type} (WEIGHT: ${supply.weight})`}
        <br />
        {`quantity: ${amounts[supply.key]}`}
      </label>
      <div className={classes.supplyItemControls}>
        <button
          type="button"
          className={classes.supplyBtn}
          onPointerDown={() => startHold(() => minusOneSupply(supply))}
          onPointerUp={stopHold}
          onPointerLeave={stopHold}
          onPointerCancel={stopHold}
        >
          --
        </button>
        <button
          type="button"
          className={classes.supplyBtn}
          onPointerDown={() => startHold(() => addOneSupply(supply))}
          onPointerUp={stopHold}
          onPointerLeave={stopHold}
          onPointerCancel={stopHold}
        >
          +
        </button>
      </div>
    </div>
  ));

  return (
    <div>{supplyList}</div>
  );
};

export default SupplyList;
