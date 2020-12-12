import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import SupplyList from './supplyList.jsx';
// import { supplyAmountList, supplyAmountFuncList } from './supplyStates.jsx';
import GetFinalSupplyObj from './getsupplyObj.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({
  changePage,
  changeFinalSupplies,
  changeSupplyObj,
  maxStorage,
}) => {
  const [totalWeight, changeTotalWeight] = useState(0);
  const [oxyAmount, changeOxyAmount] = useState(0);
  const [foodAmount, changeFoodAmount] = useState(0);
  const [waterAmount, changeWaterAmount] = useState(0);
  const [clothesAmount, changeClothesAmount] = useState(0);
  const [clothesAmount2, changeClothesAmount2] = useState(0);
  const [suitAmount, changeSuitAmount] = useState(0);
  const [suitAmount2, changeSuitAmount2] = useState(0);
  const [AImainAmount, changeAImainAmount] = useState(0);
  const [tirePatchAmount, changeTirePatchAmount] = useState(0);
  const [roverMainAmount, changeRoverMainAmount] = useState(0);
  const [showAlert, toggleAlert] = useState(false);

  const supplyAmountList = [
    oxyAmount,
    foodAmount,
    waterAmount,
    clothesAmount,
    clothesAmount2,
    suitAmount,
    suitAmount2,
    AImainAmount,
    tirePatchAmount,
    roverMainAmount,
  ];
  const supplyAmountFuncList = [
    changeOxyAmount,
    changeFoodAmount,
    changeWaterAmount,
    changeClothesAmount,
    changeClothesAmount2,
    changeSuitAmount,
    changeSuitAmount2,
    changeAImainAmount,
    changeTirePatchAmount,
    changeRoverMainAmount,
  ];

  const getFinalSupplies = () => {
    const finalSupplyList = data.supplyList.map((supply, index) => {
      const finalSupply = {
        type: supply.type,
        weight: supply.weight,
        amount: supplyAmountList[index],
        totalWeight: (supplyAmountList[index] * supply.weight),
      };
      return finalSupply;
    });
    return finalSupplyList;
  };
  let alertPopUp;
  if (showAlert) {
    const alertMsg = 'There is not enough storage!';
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} />
    );
  }
  return (
    <div className={classes.noticePage}>
      <div className={classes.supplyPage}>
        <h3>CHOOSE_MISSION_SUPPLIES</h3>
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
            totalWeight={totalWeight}
            toggleAlert={toggleAlert}
            changeTotalWeight={changeTotalWeight}
            supplyAmountList={supplyAmountList}
            supplyAmountFuncList={supplyAmountFuncList}
          />
        </div>
        <br />
        <button type="button" onClick={() => { changePage('supplyAdvice'); }}>Any advice on what should I take?</button>
        <button type="button" onClick={(e) => { const finalSupplies = getFinalSupplies(); const finalSupplyObj = GetFinalSupplyObj(supplyAmountList); changeFinalSupplies(e, finalSupplies); changeSupplyObj(e, finalSupplyObj); changePage('review'); }}>Review Equiptment</button>
      </div>
    </div>
  );
};

export default ChooseSupplies;
