export const LIKE_POST = 'LIKE_POST';

export const likePost = (like, id) => {
  return {
    type: LIKE_POST,
    like: like,
    id: id,
  };
};
