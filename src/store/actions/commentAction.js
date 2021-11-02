import {REQUEST_COMMENTS, SEND_COMMENT} from '../constants/constants';

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
