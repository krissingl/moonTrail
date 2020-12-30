import { createStore } from 'redux';

const initialState = {
  test: 'We are Testing REDUX store (initial store)',
  crew: [],
  rover: {},
  supplyObj: {},
  supplyList: [],
  savedDistance: null,
  currentlyTraveling: false,
  previousLandmark: 'spaceLOL',
  currentLandmark: 'MARE_CRISIUM',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'test') {
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
  }
  return state;
};

const store = createStore(reducer);

export default store;
