import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import supplyLabel from './supplyLabel.jsx';
import classes from '../css/styles.css';

const randItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const makeOffer = (supplyObj) => {
  const keys = Object.keys(supplyObj);
  const owned = keys.filter((key) => supplyObj[key].amount > 0);
  const giveKey = randItem(owned.length ? owned : keys);
  const maxGive = Math.min(3, Math.max(1, supplyObj[giveKey].amount));
  let receiveKey = randItem(keys);
  while (receiveKey === giveKey) {
    receiveKey = randItem(keys);
  }
  return {
    give: { key: giveKey, amount: 1 + Math.floor(Math.random() * maxGive) },
    receive: { key: receiveKey, amount: 1 + Math.floor(Math.random() * 3) },
    traded: false,
  };
};

const Trade = ({
  changePage,
  dispatch,
  supplyObj,
  offer,
}) => {
  const tradedBeforeArriving = useRef(Boolean(offer && offer.traded));

  useEffect(() => {
    if (!offer && Object.keys(supplyObj).length) {
      dispatch({ type: 'setLandmarkOffer', payload: makeOffer(supplyObj) });
    }
  }, [offer, supplyObj]);

  if (!offer) {
    return null;
  }

  const owned = supplyObj[offer.give.key] ? supplyObj[offer.give.key].amount : 0;
  const canAfford = owned >= offer.give.amount;

  const inventory = Object.keys(supplyObj)
    .filter((key) => supplyObj[key].amount > 0)
    .map((key) => (
      <div key={key} className={classes.supplyCheckRow}>
        <span className={classes.supplyCheckName}>{supplyLabel(key)}</span>
        <span className={classes.supplyCheckAmount}>{supplyObj[key].amount}</span>
      </div>
    ));

  return (
    <div className={classes.noticePage}>
      <h3 className={classes.title}>A STRANGE VENDING MACHINE HUMS IN THE CRATER</h3>
      {offer.traded ? (
        <>
          <h5>
            {tradedBeforeArriving.current
              ? 'THE MACHINE SITS DARK. IT HAS NOTHING ELSE TO TRADE HERE.'
              : 'THE MACHINE WHIRS AND DISPENSES YOUR GOODS.'}
          </h5>
          <div className={classes.tradeActions}>
            <button type="button" className={classes.tradeBtn} onClick={() => changePage('landmark')}>LEAVE</button>
          </div>
        </>
      ) : (
        <>
          <div className={classes.tradeOffer}>
            <h5>{`IT WANTS: ${offer.give.amount} x ${supplyLabel(offer.give.key)}`}</h5>
            <h5>{`IT OFFERS: ${offer.receive.amount} x ${supplyLabel(offer.receive.key)}`}</h5>
          </div>
          {canAfford ? null : (
            <h5 className={classes.tradeWarning}>YOU DO NOT HAVE ENOUGH TO TRADE.</h5>
          )}
          <div className={classes.tradeInventory}>
            <div className={classes.reviewLabel}>YOUR_SUPPLIES:</div>
            {inventory.length ? inventory : <div>NOTHING LEFT.</div>}
          </div>
          <div className={classes.tradeActions}>
            <button
              type="button"
              className={classes.tradeBtn}
              onClick={() => dispatch({ type: 'tradeSupplies', payload: offer })}
              disabled={!canAfford}
            >
              ACCEPT
            </button>
            <button
              type="button"
              className={classes.tradeBtn}
              onClick={() => changePage('landmark')}
            >
              DECLINE
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  supplyObj: state.supplyObj,
  offer: state.landmarkOffer,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trade);
