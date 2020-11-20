import React from 'react';

const Intro = ({ changePage }) => {
  return (
    <div>
      <h3>This is the Intro Page</h3>
      <button onClick={() => { changePage('naming'); }} >Begin</button>
    </div>
  )
}

export default Intro;