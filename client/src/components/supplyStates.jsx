import React, { useState } from 'react';

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

export const supplyAmountList = [
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
export const supplyAmountFuncList = [
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

export default supplyAmountList;
