import { createStore } from 'redux';

const initialState = {
  test: 'We are Testing REDUX store (initial store)',
  rover: 'rover',
  supplyObj: {},
  savedDistance: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'test') {
    return { ...state, test: action.payload };
  } if (action.type === 'supplyObjChange') {
    return { ...state, supplyObj: action.payload };
  } if (action.type === 'landmarkDistanceChange') {
    return { ...state, savedDistance: action.payload };
  } if (action.type === 'changeRover') {
    return { ...state, rover: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
