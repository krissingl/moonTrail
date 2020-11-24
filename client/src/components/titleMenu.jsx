import React from 'react';

const TitleMenu = ({ changePage }) => (
  <div>
    <button type="button" onClick={() => { changePage('main'); }}>Main Menu</button>
  </div>
);

export default TitleMenu;
