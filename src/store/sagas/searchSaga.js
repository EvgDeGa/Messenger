import {put, call} from 'redux-saga/effects';
import {FETCH_FRIENDS, FETCH_GROUP} from '../constants/constants';
import {Http} from '../http';
import {showLoader, hideLoader} from '../actions/loaderAction';
export function* searchWorker(action) {
  try {
    yield put(showLoader());
    const payloadFriends = yield call(fetchFriends, action.auth);
    const payloadGroup = yield call(fetchGroup, action.auth);
    yield put({type: FETCH_FRIENDS, payload: payloadFriends});
    yield put({type: FETCH_GROUP, payload: payloadGroup});
    yield put(hideLoader());
  } catch (e) {
    console.log('searchleryWorker-error', e);
    yield put(hideLoader());
  }
}

async function fetchFriends(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/friends.get?user_id=' +
      auth.userId +
      '&order=hints&fields=city,domain,photo_50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

async function fetchGroup(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/groups.get?user_id=' +
      auth.userId +
      '&extended=1&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
