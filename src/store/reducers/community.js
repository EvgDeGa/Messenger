// import { } from '../actions/PageActions'

const initialState = [
  {
    id: '1342',
    name: 'Community1',
    profilePhoto: require('../../assets/img/ProfileImage.png'),
    city: 'Welcome',
  },
  {
    id: '223423',
    name: 'Community2',
    profilePhoto: require('../../assets/img/ProfileImage.png'),
    city: 'Welcome',
  },
];

export function communityReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
