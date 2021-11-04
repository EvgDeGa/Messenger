import {LIKE_POST, REQUEST_POSTS} from '../constants/constants';

export const likePost = (auth, userLikes, ownerId, itemId) => {
  return {
    type: LIKE_POST,
    auth: auth,
    userLikes: userLikes,
    ownerId: ownerId,
    itemId: itemId,
  };
};

export const getPost = auth => {
  return {
    type: REQUEST_POSTS,
    auth: auth,
  };
};
