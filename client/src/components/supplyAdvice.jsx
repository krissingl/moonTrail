import React from 'react';

const SupplyAdvice = ({ changePage }) => {
  console.log('Supply Advice page fired');
  return (
    <div>
      <h3>RECOMMENDED_SUPLLIES_FOR_THIS_MISSION:</h3>
      <br />
      <div>OXYGENTANK.....needed by crew constantly (reccomend: 2+ per crewmember)</div>
      <br />
      <div>
        FREEZE-DRIED FOOD.....needed by the crew constantly to maintain health
      </div>
      <br />
      <div>WATER-POUCH.....needed by the crew constantly to maintain health</div>
      <br />
      <div>
        REGULAR_CLOTHES_SET.....needed to maintain crew health (reccomend: 2+ sets per crewmember)
      </div>
      <br />
      <div>
        WARM_CLOTHES_SET.....warmer alternative to REGULAR_CLOTHES_SET
      </div>
      <br />
      <div>
        SPACE_SUIT.....each crewmember must have 1 at all times (reccomend: 1+ per crewmember)
      </div>
      <br />
      <div>
        DUST_PROOF_SPACE_SUIT.....safer alternative to the SPACE_SUIT (reccomend: 1+ per crewmember)
      </div>
      <br />
      <div>
        CACAL_MAINTENANCE_KIT.....needed to maintain
        Communications_Artifical_Companion_and_Analytical_Locator(reccomend: 9+)
      </div>
      <br />
      <div>ROVER_TIRE_PATCH.....must-have in case of rover flat tire (reccomend: 5+)</div>
      <br />
      <div>ROVER_MAINTENANCE_KIT.....must-have in case of rover breakdown (reccomend: 5+)</div>
      <br />
      <br />
      <button type="button" onClick={() => { changePage('supplies'); }}>Back to Supplies</button>
    </div>
  );
};

export default SupplyAdvice;
