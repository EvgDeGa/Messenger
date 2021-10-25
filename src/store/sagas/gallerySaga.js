import {put, call} from 'redux-saga/effects';
import {FETCH_GALLERY} from '../constants/constants';
import {Http} from '../http';
import {showLoader, hideLoader} from '../actions/loaderAction';

export function* galleryWorker(action) {
  try {
    //   yield put(showLoader());
    const payload = yield call(fetchGallery, action.auth);
    yield put({type: FETCH_GALLERY, payload});
    //   yield put(hideLoader());
  } catch (e) {
    console.log('galleryWorker-error', e);
    //   yield put(hideLoader());
  }
}

async function fetchGallery(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/photos.get?owner_id=' +
      auth.userId +
      '&album_id=saved&count=50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  console.log(data);
  return await data.response;
}
