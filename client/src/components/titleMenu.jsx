import React from 'react';

const TitleMenu = ({ changePage }) => {
  console.log('TitleMenu fired');
  return (
    <div>
      <button type="button" onClick={() => { changePage('main'); }}>Main Menu</button>
    </div>
  );
};

export default TitleMenu;
