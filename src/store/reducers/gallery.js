import {FETCH_GALLERY, FETCH_GALLERY_FAILURE} from '../constants/constants';

const initialState = [
  {
    count: 0,
    items: [],
    error: false,
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
    case FETCH_GALLERY_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
