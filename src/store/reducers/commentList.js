import {
  FETCH_COMMENTS,
  LIKED_COMMENT,
  POST_COMMENT,
  FETCH_COMMENT_FAILURE,
} from '../constants/constants';

export function commentListReducer(state = initialState, action) {
  function findItem(element, index, array) {
    if ((element.from_id == action.ownerId) & (element.id == action.itemId)) {
      return true;
    } else {
      return false;
    }
  }

  switch (action.type) {
    case LIKED_COMMENT:
      let index = state.items.findIndex(findItem);
      if (action.userLikes) {
        state.items[index].likes.count = state.items[index].likes.count - 1;
        state.items[index].likes.user_likes = 0;
      } else {
        state.items[index].likes.count = state.items[index].likes.count + 1;
        state.items[index].likes.user_likes = 1;
      }
      return {...state};
    case FETCH_COMMENTS:
      return action.payload;
    case POST_COMMENT:
      return {...state};
    case FETCH_COMMENT_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  items: [],
  error: false,
};
