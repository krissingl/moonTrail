import React from 'react';

const TitleMenu = ({ changePage }) => {
  return (
    <div>
      <button onClick={() => { changePage('main'); }} >Main Menu</button>
    </div>
  )
}

export default TitleMenu;