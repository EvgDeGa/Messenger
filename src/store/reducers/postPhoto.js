export function postPhotoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = [
  {
    postId: '1',
    photo: require('../../assets/img/postPhoto/1.png'),
  },
  {
    postId: '1',
    photo: require('../../assets/img/postPhoto/11.png'),
  },
  {
    postId: '1',
    photo: require('../../assets/img/postPhoto/12.png'),
  },

  {
    postId: '3',
    photo: require('../../assets/img/postPhoto/2.png'),
  },

  {
    postId: '4',
    photo: require('../../assets/img/postPhoto/3.png'),
  },

  {
    postID: '5',
    photo: require('../../assets/img/postPhoto/1.png'),
  },
];
