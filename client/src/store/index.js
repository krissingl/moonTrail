import { createStore } from 'redux';

const initialState = {
  page: 'main',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changePage') {
    return Object.assign({}, state, {
      page: action.payload
    });
  }
  return state;
};
