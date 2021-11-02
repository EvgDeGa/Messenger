import {put, call} from 'redux-saga/effects';
import {FETCH_POSTS} from '../constants/constants';
import {Http} from '../http';
import {showLoader, hideLoader} from '../actions/loaderAction';

export function* postWorker(action) {
  try {
    yield put(showLoader());
    const payloadPosts = yield call(fetchPosts, action.auth);
    yield put({type: FETCH_POSTS, payload: payloadPosts});
    yield put(hideLoader());
  } catch (e) {
    console.log('postsWorker-error', e);
    yield put(hideLoader());
  }
}

async function fetchPosts(auth) {
  const data = await Http.get(
    'https://api.vk.com/method/newsfeed.get?user_id=' +
      auth.userId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
