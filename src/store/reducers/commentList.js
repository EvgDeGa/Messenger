import {
  ADD_COMMENT,
  FETCH_COMMENTS,
  LIKE_COMMENT,
} from '../constants/constants';

export function commentListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log(action.payload);
    default:
      return state;
  }

  function requiredItem(element, index, array) {
    if (element.id == this) {
      return true;
    } else {
      return false;
    }
  }
  function changeLike(index) {
    try {
      if (state[index].liked) {
        state[index].like = String(Number(action.like) - 1);
      } else {
        state[index].like = String(Number(action.like) + 1);
      }
      state[index].liked = !state[index].liked;
    } catch (error) {
      console.log(error);
    }
  }

  function changeReplyLike(index, comIndex) {
    try {
      if (state[index].reply[comIndex].liked) {
        state[index].reply[comIndex].like = String(Number(action.like) - 1);
      } else {
        state[index].reply[comIndex].like = String(Number(action.like) + 1);
      }
      state[index].reply[comIndex].liked = !state[index].reply[comIndex].liked;
    } catch (error) {
      console.log(error);
    }
  }
}

const initialState = {
  count: 0,
  items: [],
};
