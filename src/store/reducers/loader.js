import {HIDE_LOADER, SHOW_LOADER} from '../constants/constants';

export function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loader: true};
    case HIDE_LOADER:
      return {...state, loader: false};
    default:
      return state;
  }
}

const initialState = [
  {
    loader: false,
  },
];
