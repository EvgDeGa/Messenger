import {FETCH_GALLERY} from '../constants/constants';

const initialState = [
  {
    count: 0,
    items: [],
  },
];

export function gallaryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GALLERY:
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
