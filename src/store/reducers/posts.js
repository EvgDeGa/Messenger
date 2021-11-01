import {FETCH_POSTS, LIKE_POST} from '../constants/constants';

export function postReducer(state = initialState, action) {
  function requiredItem(element, index, array) {
    if (element.id == action.id) {
      return true;
    } else {
      return false;
    }
  }

  switch (action.type) {
    case LIKE_POST:
      let index = state.findIndex(requiredItem);

      if (state[index].liked) {
        state[index].like = String(Number(action.like) - 1);
      } else {
        state[index].like = String(Number(action.like) + 1);
      }
      state[index].liked = !state[index].liked;

      return [...state];
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
