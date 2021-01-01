import { createStore } from 'redux';

const initialState = {
  page: 'main',
  crew: [],
  rover: {},
  supplyObj: {},
  supplyList: [],
  savedDistance: null,
  currentlyTraveling: false,
  previousLandmark: 'spaceLOL',
  landmark: 'MARE_CRISIUM',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changePage') {
    return { ...state, test: action.payload };
  } if (action.type === 'changeCrew') {
    return { ...state, crew: action.payload };
  } if (action.type === 'changeRover') {
    return { ...state, rover: action.payload };
  } if (action.type === 'supplyObjChange') {
    return { ...state, supplyObj: action.payload };
  } if (action.type === 'changeSupplyList') {
    return { ...state, supplyList: action.payload };
  } if (action.type === 'landmarkDistanceChange') {
    return { ...state, savedDistance: action.payload };
  } if (action.type === 'changeTravelingStatus') {
    return { ...state, currentlyTraveling: action.payload };
  } if (action.type === 'changePrevLandmark') {
    return { ...state, previousLandmark: action.payload };
  } if (action.type === 'changeLandmark') {
    return { ...state, landmark: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
