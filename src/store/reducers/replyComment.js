import {ADD_COMMENT, LIKE_COMMENT} from '../actions/comment';

export function replyCommentReducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_COMMENT:
      return action.payLoad;
    case ADD_COMMENT:
      return action.payLoad;
    default:
      return state;
  }
}

const initialState = [
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    body: 'User experience design for the Web (and its siblings.',
    image: null,
    date: '25 сен. в 22:12 ',
    id: '514aa634-08bd-4ca3-8a1a-eb108468023452468ed',
    parent: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
    like: '12',
    reply: null,
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    body: 'User experience design for the Web (and its siblings.',
    image: null,
    date: '25 сен. в 22:12 ',
    id: '514aa634-08bd-s4ca3-8a1a-eb1013452846808ed',
    parent: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
    like: '12',
    reply: null,
  },
];
