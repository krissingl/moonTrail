import React from 'react';

const SupplyObj = () => {
  console.log('supplyObj fired');
  const getFinalSupplyObj = (supplyList) => {
    const supplyObj = {
      oxygen:
      { type: supplyList[0].type, weight: supplyList[0].weight, amount: oxyAmount },
      food:
      { type: supplyList[1].type, weight: supplyList[1].weight, amount: foodAmount },
      water:
      { type: supplyList[2].type, weight: supplyList[2].weight, amount: waterAmount },
      clothes:
      { type: supplyList[3].type, weight: supplyList[3].weight, amount: clothesAmount },
      clothes2:
      { type: supplyList[4].type, weight: supplyList[4].weight, amount: clothesAmount2 },
      spaceSuit:
      { type: supplyList[5].type, weight: supplyList[5].weight, amount: suitAmount },
      spaceSuit2:
      { type: supplyList[6].type, weight: supplyList[6].weight, amount: suitAmount2 },
      aiKit:
      { type: supplyList[7].type, weight: supplyList[7].weight, amount: AImainAmount },
      tirePatch:
      { type: supplyList[8].type, weight: supplyList[8].weight, amount: tirePatchAmount },
      roverKit:
      { type: supplyList[9].type, weight: supplyList[9].weight, amount: roverMainAmount },
    };
    return supplyObj;
  };
  return (
    <div>SupplyObj</div>
  );
};

export default SupplyObj;
