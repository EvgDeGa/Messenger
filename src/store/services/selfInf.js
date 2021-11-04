import {Http} from '../http';

export async function fetchSelfInf(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/users.get?user_ids=' +
      auth.userId +
      '&fields=bdate, city, connections, country, home_town, has_photo, photo_100, domain,  site, education, universities, schools, status,  followers_count, common_count,  nickname, screen_name, is_friend, friend_status, career&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response[0];
}
