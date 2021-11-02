import {
  ADD_COMMENT,
  FETCH_COMMENTS,
  POST_COMMENT,
} from '../constants/constants';

export function commentListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log('com  ', action.payload);
      return action.payload;
    case POST_COMMENT:
      console.log('post', action.payload);
      return {...state};
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  items: [],
};
