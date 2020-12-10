import data from '../../dist/data.json';

const GetFinalSupplyObj = (amountList) => {
  const { supplyList } = data;
  const supplyObj = {
    oxygen:
    { type: data.supplyList[0].type, weight: data.supplyList[0].weight, amount: amountList[0] },
    food:
    { type: supplyList[1].type, weight: supplyList[1].weight, amount: amountList[1] },
    water:
    { type: supplyList[2].type, weight: supplyList[2].weight, amount: amountList[2] },
    clothes:
    { type: supplyList[3].type, weight: supplyList[3].weight, amount: amountList[3] },
    clothes2:
    { type: supplyList[4].type, weight: supplyList[4].weight, amount: amountList[4] },
    spaceSuit:
    { type: supplyList[5].type, weight: supplyList[5].weight, amount: amountList[5] },
    spaceSuit2:
    { type: supplyList[6].type, weight: supplyList[6].weight, amount: amountList[6] },
    aiKit:
    { type: supplyList[7].type, weight: supplyList[7].weight, amount: amountList[7] },
    tirePatch:
    { type: supplyList[8].type, weight: supplyList[8].weight, amount: amountList[8] },
    roverKit:
    { type: supplyList[9].type, weight: supplyList[9].weight, amount: amountList[9] },
  };
  return supplyObj;
};

export default GetFinalSupplyObj;
