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
  const chosenRover = rover;
  const chosenSupplies = supplyList.map((supply) => (
    <div>
      <div>{supply.type}</div>
      <div>{supply.amount}</div>
    </div>
  ));
  return (
    <div>
      <h3>This is the choice review page</h3>
      <div>
        Crew List:
        {crewList}
      </div>
      <div>
        Rover Type:
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
