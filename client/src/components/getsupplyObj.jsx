import data from '../../dist/data.json';

const GetFinalSupplyObj = (amounts) => data.supplyList.reduce((supplyObj, supply) => ({
  ...supplyObj,
  [supply.key]: {
    type: supply.type,
    weight: supply.weight,
    amount: amounts[supply.key] || 0,
  },
}), {});

export default GetFinalSupplyObj;
