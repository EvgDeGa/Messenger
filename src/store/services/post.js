import {Http} from '../http';

export async function fetchPosts(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/newsfeed.get?user_id=' +
      auth.userId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function likePost(auth, ownerId, itemId) {
  const data = await Http.post(
    'https://api.vk.com/method/likes.add?type=post&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function dislikePost(auth, ownerId, itemId) {
  const data = await Http.post(
    'https://api.vk.com/method/likes.delete?type=post&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
