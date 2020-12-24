import { createStore } from 'redux';

const initialState = {
  test: 'We are Testing REDUX store (initial store)',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'test') {
    return { ...state, test: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
