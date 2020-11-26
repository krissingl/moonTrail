import React from 'react';

const ChoiceReview = ({
  changePage,
  crew,
  rover,
  supplyList,
}) => {
  const crewList = crew.map((astro) => (
    <div>{astro}</div>
  ));
  const chosenRover = `Type: ${rover.type} Max Speed: ${rover.maxSpeed} Max Storage: ${rover.storageCapacity}`;
  const chosenSupplies = supplyList.map((supply) => (
    <div>
      <div>{supply.type}</div>
      <div>{`How many: ${supply.amount}`}</div>
    </div>
  ));
  return (
    <div>
      <h3>REVIEW BEFORE MISSION LAUNCH</h3>
      <div>
        Crew List:
        {crewList}
      </div>
      <div>
        Rover:
        <br />
        {chosenRover}
      </div>
      <div>
        Supply List:
        {chosenSupplies}
      </div>
      <button type="button" onClick={() => { changePage('main'); }}>Start Over</button>
      <button type="button" onClick={() => { changePage('landmark'); }}>Begin the Journey!</button>
    </div>
  );
};

export default ChoiceReview;
