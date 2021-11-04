import {Http} from '../http';

export async function likeComment(auth, ownerId, itemId) {
  const data = await Http.post(
    'https://api.vk.com/method/likes.add?type=comment&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function dislikeComment(auth, ownerId, itemId) {
  const data = await Http.post(
    'https://api.vk.com/method/likes.delete?type=comment&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function fetchComments(auth, ownerId, postId) {
  const data = await Http.get(
    'https://api.vk.com/method/wall.getComments?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&need_likes=1&sort=asc&extended=1&fields=photo_50&count=50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function fetchReplyComments(auth, ownerId, postId, comment_id) {
  const data = await Http.get(
    'https://api.vk.com/method/wall.getComments?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&need_likes=1&sort=asc&extended=1&fields=photo_50&count=50&comment_id=' +
      comment_id +
      '&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function postComments(
  message,
  replyToComment,
  auth,
  postId,
  ownerId,
) {
  const parent = replyToComment ? '&reply_to_comment=' + replyToComment : '';
  const data = await Http.post(
    'https://api.vk.com/method/wall.createComment?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&message=' +
      message +
      parent +
      '&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
