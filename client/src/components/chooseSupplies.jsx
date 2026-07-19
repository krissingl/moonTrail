import React, { useState } from 'react';
import { connect } from 'react-redux';
import AlertWindow from './popUpAlert.jsx';
import SupplyList from './supplyList.jsx';
import GetFinalSupplyObj from './getsupplyObj.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const emptyAmounts = () => data.supplyList.reduce(
  (amounts, supply) => ({ ...amounts, [supply.key]: 0 }),
  {},
);

const ChooseSupplies = ({
  changePage,
  rover,
  dispatch,
}) => {
  const maxStorage = rover.storageCapacity;

  const [amounts, setAmounts] = useState(emptyAmounts());
  const [showAlert, toggleAlert] = useState(false);

  const setAmount = (key, value) => {
    setAmounts((prev) => ({ ...prev, [key]: value }));
  };

  const totalWeight = data.supplyList.reduce(
    (sum, supply) => sum + (amounts[supply.key] * supply.weight),
    0,
  );

  let alertPopUp;
  if (showAlert) {
    const alertMsg = 'There is not enough storage!';
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} />
    );
  }

  const getSupplyList = () => data.supplyList.map((supply) => ({
    type: supply.type,
    weight: supply.weight,
    amount: amounts[supply.key],
    totalWeight: (amounts[supply.key] * supply.weight),
  }));

  const changeGlobalSupplyObj = (supplyObj) => {
    dispatch({
      type: 'supplyObjChange',
      payload: supplyObj,
    });
  };
  const changeGlobalSupplyList = (supplyList) => {
    dispatch({
      type: 'changeSupplyList',
      payload: supplyList,
    });
  };

  return (
    <div className={classes.noticePage}>
      <div className={classes.supplyPage}>
        <h3 className={classes.title}>CHOOSE_MISSION_SUPPLIES</h3>
        {alertPopUp}
        <div>
          current weight:
          {totalWeight}
        </div>
        <div>
          max weight:
          {maxStorage}
        </div>
        <br />
        <div>
          <SupplyList
            maxStorage={maxStorage}
            toggleAlert={toggleAlert}
            amounts={amounts}
            setAmount={setAmount}
          />
        </div>
        <br />
        <button type="button" className={classes.supplyBoxBtns} onClick={() => { changePage('supplyAdvice'); }}>Mission Equipment Data</button>
        <button type="button" className={classes.supplyBoxBtns} onClick={() => { changeGlobalSupplyList(getSupplyList()); changeGlobalSupplyObj(GetFinalSupplyObj(amounts)); changePage('review'); }}>Review Equipment</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rover: state.rover,
  supplyObj: state.supplyObj,
  supplyList: state.supplyList,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseSupplies);
