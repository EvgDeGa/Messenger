import {GET_SELFINF} from '../constants/constants';

const initialState = {
  first_name: '',
  id: 0,
  last_name: '',
  can_access_closed: true,
  is_closed: false,
  screen_name: '',
  photo_100: '',
  friend_status: 0,
  nickname: '',
  domain: '',
  bdate: '',
  country: {
    id: 0,
    title: '',
  },
  has_photo: 0,
  is_friend: 0,
  instagram: '',
  site: '',
  status: '',
  followers_count: 0,
  common_count: 0,
  career: [],
  university: 0,
  university_name: '',
  faculty: 0,
  faculty_name: '',
  graduation: 0,
  home_town: '',
  universities: [],
  schools: [],
};

export function selfInfReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SELFINF:
      return action.payload;
    default:
      return state;
  }
}
