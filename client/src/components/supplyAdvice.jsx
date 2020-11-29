import React from 'react';

const SupplyAdvice = ({ changePage }) => {
  console.log('Supply Advice page fired');
  return (
    <div>
      <h3>RECOMMENDED SUPLLIES FOR THIS MISSION</h3>
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <div>
        Freeze-Dried Food………….Food is deleted by crew consumption every 8 secs during travel
      </div>
      <br />
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <div>OxygenTank…………………Should have at least 2 per Astro</div>
      <br />
      <button type="button" onClick={() => { changePage('supplies'); }}>Back to Supplies</button>
    </div>
  );
};

export default SupplyAdvice;
