/* eslint-disable max-len */
import React from 'react';
import classes from '../css/styles.css';

const SupplyAdvice = ({ changePage }) => {
  const advice = (
    <div className={classes.supplyAdvice}>
      <p>OXYGENTANK</p>
      <p>needed by crew constantly (reccomend: 2+ per crewmember)</p>
      <p>FREEZE-DRIED FOOD</p>
      <p>needed by the crew constantly to maintain health</p>
      <p>WATER-POUCH</p>
      <p>needed by the crew constantly to maintain health</p>
      <p>REGULAR_CLOTHES_SET</p>
      <p>needed to maintain crew health (reccomend: 2+ sets per crewmember)</p>
      <p>WARM_CLOTHES_SET</p>
      <p>warmer alternative to REGULAR_CLOTHES_SET</p>
      <p>SPACE_SUIT</p>
      <p>each crewmember must have 1 at all times (reccomend: 1+ per crewmember)</p>
      <p>DUST_PROOF_SPACE_SUIT</p>
      <p>safer alternative to the SPACE_SUIT (reccomend: 1+ per crewmember)</p>
      <p>CACAL_MAINTENANCE_KIT</p>
      <p>needed to maintain CACAL bot (used for danger navigation)(reccomend: 9+)</p>
      <p>ROVER_TIRE_PATCH</p>
      <p>must-have in case of rover flat tire (reccomend: 5+)</p>
      <p>ROVER_MAINTENANCE_KIT</p>
      <p>must-have in case of rover breakdown (reccomend: 5+)</p>
    </div>
  );
  return (
    <div className={classes.noticePage}>
      <h3 className={classes.title}>EQUIPMENT_DATA_FOR_THIS_MISSION:</h3>
      <br />
      <div>
        {advice}
      </div>
      <br />
      <button type="button" onClick={() => { changePage('supplies'); }}>BACK TO SUPPLIES</button>
    </div>
  );
};

export default SupplyAdvice;
