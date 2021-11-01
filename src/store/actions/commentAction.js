import {REQUEST_COMMENTS} from '../constants/constants';

export const addComment = (auth, postId, ownerId) => {
  console.log('ss');
  return {
    type: REQUEST_COMMENTS,
    auth: auth,
    postId: postId,
    ownerId: ownerId,
  };
};

export const likeComment = (like, id, parent) => {
  return {
    type: LIKE_COMMENT,
    like: like,
    id: id,
    parent: parent,
  };
};
