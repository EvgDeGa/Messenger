import {FETCH_GROUP, FETCH_GROUP_FAILURE} from '../constants/constants';
const initialState = {
  count: 0,
  items: [],
  error: false,
};

export function groupReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GROUP:
      return {
        ...state,
        count: action.payload.count,
        items: action.payload.items,
      };
    case FETCH_GROUP_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
