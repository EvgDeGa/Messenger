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
  {
    id: '2',
    liked: false,
    postHolder: ' Tony Monta',
    holderPhoto: require('../../assets/img/postPhotoProfile/p2.png'),
    postDate: '1h ago',
    like: '14',
    postText: 'Writing code is not so bad!',
  },
  {
    id: '3',
    liked: false,
    postHolder: ' Jessica Thompson',
    holderPhoto: require('../../assets/img/postPhotoProfile/p3.png'),
    postDate: '2h ago',
    like: '17',
    postText: null,
  },
  {
    id: '4',
    liked: false,
    postHolder: 'Dustin Grant',
    holderPhoto: require('../../assets/img/postPhotoProfile/p4.png'),
    postDate: '3h ago',
    like: '238',
    postText: null,
  },
  {
    id: '5',
    liked: false,
    postHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/postPhotoProfile/p1.png'),
    postDate: '1h ago',
    like: '238',
    postText:
      'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice. Wireframes, site maps, flow diagrams, content inventories, taxonomies, mockups and the ever-sacred specifications document (aka “The Spec”) helped define the practice in its infancy. These deliverables crystallized the value that the UX discipline brought to an organization.',
  },
];
