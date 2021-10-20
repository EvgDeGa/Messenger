import {ADD_COMMENT, LIKE_COMMENT} from '../actions/comment';

export function commentListReducer(state = initialState, action) {
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
    body: 'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    image: null,
    date: '25 сен. в 22:12 ',
    id: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
    like: '12',
    parent: null,
    reply: [],
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    body: null,
    image: require('../../assets/img/CommentPhoto.png'),
    date: '25 сен. в 22:12 ',
    id: '01793ef41-fdb6-4700-a4dc-6d7bbc54385a',
    like: '12',
    parent: null,
    reply: null,
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    body: 'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    image: null,
    date: '25 сен. в 22:12 ',
    id: '1ef06878-58b5-48b0-9349-73986ab616bb4',
    like: '12',
    parent: null,
    reply: null,
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    body: 'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    image: require('../../assets/img/CommentPhoto.png'),
    date: '25 сен. в 22:12 ',
    id: '1ef06878-58b5-481b0-9349-73986ab66bb4',
    like: '12',
    parent: null,
    reply: null,
  },
];
