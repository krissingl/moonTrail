import { useEffect } from 'react';
import GetFinalSupplyObj from '../components/getsupplyObj.jsx';

const LandmarkDistanceCalculator = (
  dispatch,
  distCounter,
  setDistCounter,
  saveDistanceTraveled,
  changeGlobalSupplyObj,
  getNewSupplyAmountList,
  changePage,
) => {
  useEffect(() => {
    const timer = distCounter > 0 && setInterval(() => {
      setDistCounter(distCounter - 1);
    }, 1000);
    if (distCounter === 0) {
      changeGlobalSupplyObj(GetFinalSupplyObj(getNewSupplyAmountList()));
      saveDistanceTraveled(null);
      changePage('landmark');
    }
    return () => clearInterval(timer);
  }, [distCounter]);
};

export default LandmarkDistanceCalculator;
