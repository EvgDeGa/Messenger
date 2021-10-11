import {createStore} from 'redux';
import initialState from './initialState';

function reducer(state = initialState) {
  return state;
}

const store = createStore(reducer);

export default store;
