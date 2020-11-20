import React from 'react';

const NameAstros = ({ changePage }) => {
  return (
    <div>
      <h3>This is the Naming Astronaunts Page</h3>
      <button onClick={() => { changePage('rover'); }} >Choose Rover</button>
    </div>
  )
}

export default NameAstros;
