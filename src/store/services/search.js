import {Http} from '../http';

export async function fetchGroup(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/groups.get?user_id=' +
      auth.userId +
      '&extended=1&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

export async function fetchFriends(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/friends.get?user_id=' +
      auth.userId +
      '&order=hints&fields=city,domain,photo_50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
