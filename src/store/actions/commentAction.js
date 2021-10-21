export const ADD_COMMENT = 'ADD_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';

export const addComment = (text, selfInf, postId) => {
  const comment = {
    postId: postId,
    commetHolder: selfInf.name,
    holderPhoto: selfInf.podilePhoto,
    body: text,
    image: null,
    date: new Date().getTime(),
    id: new Date().getTime(),
    like: '0',
    liked: false,
    parent: '',
    reply: [],
  };

  return {
    type: ADD_COMMENT,
    comment: comment,
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
