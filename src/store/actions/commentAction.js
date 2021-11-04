import {
  SEND_COMMENT,
  REQUEST_COMMENTS,
  LIKE_COMMENT,
} from '../constants/constants';

export const addComment = (auth, postId, ownerId) => {
  console.log('ss');
  return {
    type: REQUEST_COMMENTS,
    auth: auth,
    postId: postId,
    ownerId: ownerId,
  };
};

export const likeComment = (auth, userLikes, ownerId, itemId) => {
  return {
    type: LIKE_COMMENT,
    auth: auth,
    userLikes: userLikes,
    ownerId: ownerId,
    itemId: itemId,
  };
};

export const sendComment = (message, replyToComment, auth, postId, ownerId) => {
  return {
    type: SEND_COMMENT,
    message: message,
    replyToComment: replyToComment,
    auth: auth,
    postId: postId,
    ownerId: ownerId,
  };
};
