export const ADD_COMMENT = 'ADD_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';

export const addComment = text => {
  return {
    type: ADD_COMMENT,
    text: text,
  };
};

export const likeComment = payLoad => {
  return {
    type: LIKE_COMMENT,
    payLoad: payLoad,
  };
};
