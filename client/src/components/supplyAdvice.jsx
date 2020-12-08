import React from 'react';
import classes from '../css/styles.css';

const SupplyAdvice = ({ changePage }) => {
  const advice = (
    <div>
      <p>OXYGENTANK...needed by crew constantly (reccomend: 2+ per crewmember)</p>
      <br />
      <p>FREEZE-DRIED FOOD...needed by the crew constantly to maintain health</p>
      <br />
      <p>WATER-POUCH...needed by the crew constantly to maintain health</p>
      <br />
      <p>
        REGULAR_CLOTHES_SET...needed to maintain crew health (reccomend: 2+ sets per crewmember)
      </p>
      <br />
      <p>WARM_CLOTHES_SET...warmer alternative to REGULAR_CLOTHES_SET</p>
      <br />
      <p>SPACE_SUIT...each crewmember must have 1 at all times (reccomend: 1+ per crewmember)</p>
      <br />
      <p>
        DUST_PROOF_SPACE_SUIT...safer alternative to the SPACE_SUIT (reccomend: 1+ per crewmember)
      </p>
      <br />
      <p>
        CACAL_MAINTENANCE_KIT...needed to maintain Communications_Artifical_Companion_and_Analytical_Locator(reccomend: 9+)
      </p>
      <br />
      <p>ROVER_TIRE_PATCH...must-have in case of rover flat tire (reccomend: 5+)</p>
      <br />
      <p>ROVER_MAINTENANCE_KIT...must-have in case of rover breakdown (reccomend: 5+)</p>
      <br />
    </div>
  )
  return (
    <div className={classes.noticePage}>
      <h3>RECOMMENDED_SUPLLIES_FOR_THIS_MISSION:</h3>
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
