import {LIKE_POST} from '../constants/constants';

export function postInformationReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

const initialState = [
  {
    id: '1',
    liked: false,
    postHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/postPhotoProfile/p1.png'),
    postDate: '1h ago',
    like: '8998',
    postText: null,
  },
];
