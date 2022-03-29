import { useEffect } from 'react';

const DepleteResource = (resourceAmount, changeResourceCallback, speed, changePage) => {
  const depletionSpeeds = { 'slow': 15000, 'steady': 10000, 'rapid': 7000 };
  useEffect(() => {
    const timer = resourceAmount > 0 && setInterval(() => {
      changeResourceCallback(resourceAmount - 1);
    // TODO: Optimize to make the rate of depletion dynamic
    }, depletionSpeeds[speed]);
    if (resourceAmount === 0) {
      // TODO: Need to add a message receiver for gameover page to tell player why they lost
      changePage('gameover');
    }
    return () => clearInterval(timer);
  }, [resourceAmount]);
};

export default DepleteResource;
