import {GET_FRIENDS} from '../constants/constants';
const initialState = {
  count: 0,
  items: [],
};

export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return {...state, count: action.count, items: action.items};
    default:
      return state;
  }
}
