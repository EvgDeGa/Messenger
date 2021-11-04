import {FETCH_POSTS, LIKED_POST} from '../constants/constants';

export function postReducer(state = initialState, action) {
  function findItem(element, index, array) {
    if (
      (element.source_id == action.ownerId) &
      (element.post_id == action.itemId)
    ) {
      return true;
    } else {
      return false;
    }
  }

  switch (action.type) {
    case LIKED_POST:
      let index = state.items.findIndex(findItem);
      if (action.userLikes) {
        state.items[index].likes.count = state.items[index].likes.count - 1;
        state.items[index].likes.user_likes = 0;
      } else {
        state.items[index].likes.count = state.items[index].likes.count + 1;
        state.items[index].likes.user_likes = 1;
      }
      return {...state};
    case FETCH_POSTS:
      console.log('posts');
      return {
        ...state,
        items: action.payload.items,
        groups: action.payload.groups,
        profiles: action.payload.profiles,
        next_from: action.payload.next_from,
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  groups: [],
  next_from: '',
};
