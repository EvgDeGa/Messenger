import {FETCH_FRIENDS, FETCH_FRIENDS_FAILURE} from '../constants/constants';
const initialState = {
  count: 0,
  items: [],
  error: false,
};

export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      console.log(action.payload);
      return {
        ...state,
        count: action.payload.count,
        items: action.payload.items,
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
