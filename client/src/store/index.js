import { createStore } from 'redux';

const initialState = {
  crew: [],
  rover: {},
  supplyObj: {},
  supplyList: [],
  savedDistance: null,
  currentlyTraveling: false,
  previousLandmark: 'spaceLOL',
  landmark: 'MARE_CRISIUM',
  eventConseq: null,
  crewHealth: 25,
  roverHealth: 10,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeCrew') {
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
  } if (action.type === 'changeEventConseq') {
    return { ...state, eventConseq: action.payload };
  } if (action.type === 'reset') {
    return { ...state, ...initialState };
  }
  return state;
};

const store = createStore(reducer);

export default store;
