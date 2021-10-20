import {ADD_COMMENT, LIKE_COMMENT} from '../actions/comment';

export function postInformationReducer(state = initialState, action) {
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
    id: '1',
    postHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/postPhotoProfile/p1.png'),
    postDate: '1h ago',
    like: '8998',
    postText: null,
    postPhoto: [
      {
        postID: '1',
        photo: require('../../assets/img/postPhoto/1.png'),
      },
      {
        postID: '1',
        photo: require('../../assets/img/postPhoto/11.png'),
      },
      {
        postID: '1',
        photo: require('../../assets/img/postPhoto/12.png'),
      },
    ],
    commentList: true,
  },
  {
    id: '2',
    postHolder: ' Tony Monta',
    holderPhoto: require('../../assets/img/postPhotoProfile/p2.png'),
    postDate: '1h ago',
    like: '14',
    postText: 'Writing code is not so bad!',
    postPhoto: false,
    commentList: false,
  },
  {
    id: '3',
    postHolder: ' Jessica Thompson',
    holderPhoto: require('../../assets/img/postPhotoProfile/p3.png'),
    postDate: '2h ago',
    like: '17',
    postText: null,
    postPhoto: [
      {
        postID: '3',
        photo: require('../../assets/img/postPhoto/2.png'),
      },
    ],
    commentList: false,
  },
  {
    id: '4',
    postHolder: 'Dustin Grant',
    holderPhoto: require('../../assets/img/postPhotoProfile/p4.png'),
    postDate: '3h ago',
    like: '238',
    postText: null,
    postPhoto: [
      {
        postID: '4',
        photo: require('../../assets/img/postPhoto/3.png'),
      },
    ],
    commentList: false,
  },
  {
    id: '5',
    postHolder: 'Kat Williams',
    holderPhoto: require('../../assets/img/postPhotoProfile/p1.png'),
    postDate: '1h ago',
    like: '238',
    postText:
      'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice. Wireframes, site maps, flow diagrams, content inventories, taxonomies, mockups and the ever-sacred specifications document (aka “The Spec”) helped define the practice in its infancy. These deliverables crystallized the value that the UX discipline brought to an organization.',
    postPhoto: [
      {
        postID: '5',
        photo: require('../../assets/img/postPhoto/1.png'),
      },
    ],
    commentList: false,
  },
];
