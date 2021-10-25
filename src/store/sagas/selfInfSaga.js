import {put, call} from 'redux-saga/effects';
import {FETCH_SELFINF} from '../constants/constants';
import {Http} from '../http';
import {showLoader, hideLoader} from '../actions/loaderAction';

export function* selfInfWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchSelfInf, action.auth);
    yield put({type: FETCH_SELFINF, payload});
    yield put(hideLoader());
  } catch (e) {
    console.log('selfInfWorker-error', e);
    yield put(hideLoader());
  }
}

async function fetchSelfInf(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/users.get?user_ids=' +
      auth.userId +
      '&fields=bdate, city, country, home_town, has_photo, photo_100, domain,  site, education, universities, schools, status,  followers_count, common_count,  nickname, screen_name, is_friend, friend_status, career&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response[0];
}
