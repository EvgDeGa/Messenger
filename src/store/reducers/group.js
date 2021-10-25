import {FETCH_GROUP} from '../constants/constants';
const initialState = {
  count: 0,
  items: [],
};

export function groupReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GROUP:
      return {
        ...state,
        count: action.payload.count,
        items: action.payload.items,
      };
    default:
      return state;
  }
}
