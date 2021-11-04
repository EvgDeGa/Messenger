import {Http} from '../http';

export async function fetchGallery(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/photos.get?owner_id=' +
      auth.userId +
      '&album_id=saved&count=50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
