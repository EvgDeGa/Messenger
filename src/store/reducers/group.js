import {GET_GROUP} from '../constants/constants';
const initialState = {
  count: 0,
  items: [],
};

export function groupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUP:
      return {...state, count: action.count, items: action.items};
    default:
      return state;
  }
}
