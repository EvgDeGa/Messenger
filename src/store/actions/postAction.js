import {LIKE_POST} from '../constants/constants';

export const likePost = (like, id) => {
  return {
    type: LIKE_POST,
    like: like,
    id: id,
  };
};
