import React from 'react';

const ChooseRover = ({ changePage }) => {
  return (
    <div>
      <h3>This is the Rover Choosing Page</h3>
      <button onClick={() => { changePage('supplies'); }} >Choose Supplies</button>
    </div>
  )
}

export default ChooseRover;
