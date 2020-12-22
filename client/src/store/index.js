import { createStore } from 'redux';

const initialState = {
  test: 'We are Testing REDUX store (initial store)',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'test') {
    return Object.assign({}, state, {
      test: action.payload
    });
  }
  return state;
};

const store = createStore();

export default store;
