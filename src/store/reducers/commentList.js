import {ADD_COMMENT, LIKE_COMMENT} from '../actions/commentAction';

export function commentListReducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_COMMENT:
      let index = null;
      if (action.parent) {
        let index = state.findIndex(requiredItem, action.parent);
        let comIndex = state[index].reply.findIndex(requiredItem, action.id);
        changeReplyLike(index, comIndex);
      } else {
        index = state.findIndex(requiredItem, action.id);
        changeLike(index);
      }
      return [...state];
    case ADD_COMMENT:
      state.push(action.comment);
      return [...state];
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

const initialState = [
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/ProfileImage.png'),
    body: 'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    image: null,
    date: '25 сен. в 22:12 ',
    id: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
    like: '12',
    liked: false,
    parent: '',
    reply: [
      {
        postId: '1',
        commetHolder: 'Kat Williams',
        holderPhoto: require('../../assets/img/ProfileImage.png'),

        body: 'User experience design for the Web (and its siblings.',
        image: null,
        date: '25 сен. в 22:12 ',
        id: '514aa634234234-08bd-4ca3-8a1a-eb108468023452468ed',
        parent: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
        like: '12',
        liked: false,
        reply: [],
      },
      {
        postId: '1',
        commetHolder: 'Kat Williams',
        holderPhoto: require('../../assets/img/ProfileImage.png'),

        body: 'User experience design for the Web (and its siblings.',
        image: null,
        date: '25 сен. в 22:12 ',
        id: '514aa634-234234555657-s4ca3-8a1a-eb1013452846808ed',
        parent: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
        like: '12',
        liked: false,
        reply: [],
      },
    ],
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/ProfileImage.png'),

    body: null,
    image: require('../../assets/img/CommentPhoto.png'),
    date: '25 сен. в 22:12 ',
    id: '01793ef4137-fdb6-4700-a84dc-6d7bbc54385a',
    like: '12',
    liked: false,
    parent: '',
    reply: [],
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/ProfileImage.png'),

    body: 'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    image: null,
    date: '25 сен. в 22:12 ',
    id: '1ef06878-58b5-48b0-839349-7323986ab616bb4',
    like: '12',
    liked: false,
    parent: '',
    reply: [],
  },
  {
    postId: '1',
    commetHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/ProfileImage.png'),

    body: 'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    image: require('../../assets/img/CommentPhoto.png'),
    date: '25 сен. в 22:12 ',
    id: '1ef0',
    like: '12',
    liked: false,
    parent: '',
    reply: [],
  },
];
