import {FETCH_FRIENDS} from '../constants/constants';
const initialState = {
  count: 0,
  items: [],
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
    default:
      return state;
  }
}
