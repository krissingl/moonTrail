import React from 'react';

const SupplyObj = () => {
  console.log('supplyObj fired');
  const getFinalSupplyObj = (supplyList) => {
    const supplyObj = {
      oxygen:
      { type: data.supplyList[0].type, weight: data.supplyList[0].weight, amount: oxyAmount },
      food:
      { type: data.supplyList[1].type, weight: data.supplyList[1].weight, amount: foodAmount },
      water:
      { type: data.supplyList[2].type, weight: data.supplyList[2].weight, amount: waterAmount },
      clothes:
      { type: data.supplyList[3].type, weight: data.supplyList[3].weight, amount: clothesAmount },
      clothes2:
      { type: data.supplyList[4].type, weight: data.supplyList[4].weight, amount: clothesAmount2 },
      spaceSuit:
      { type: data.supplyList[5].type, weight: data.supplyList[5].weight, amount: suitAmount },
      spaceSuit2:
      { type: data.supplyList[6].type, weight: data.supplyList[6].weight, amount: suitAmount2 },
      aiKit:
      { type: data.supplyList[7].type, weight: data.supplyList[7].weight, amount: AImainAmount },
      tirePatch:
      { type: data.supplyList[8].type, weight: data.supplyList[8].weight, amount: tirePatchAmount },
      roverKit:
      { type: data.supplyList[9].type, weight: data.supplyList[9].weight, amount: roverMainAmount },
    };
    return supplyObj;
  };
  return (
    <div>SupplyObj</div>
  );
};

export default SupplyObj;
