import {LIKE_POST, REQUEST_POSTS} from '../constants/constants';

export const likePost = (like, id) => {
  return {
    type: LIKE_POST,
    like: like,
    id: id,
  };
};

export const getPost = auth => {
  return {
    type: REQUEST_POSTS,
    auth: auth,
  };
};
