import {put, call} from 'redux-saga/effects';
import {FETCH_COMMENTS} from '../constants/constants';
import {Http} from '../http';
import {showLoader, hideLoader} from '../actions/loaderAction';

export function* commentWorker(action) {
  try {
    //   yield put(showLoader());
    const payload = yield call(
      fetchComments,
      action.auth,
      action.ownerId,
      action.postId,
    );
    yield put({type: FETCH_COMMENTS, payload});
    //   yield put(hideLoader());
  } catch (e) {
    console.log('commentWorker-error', e);
    //   yield put(hideLoader());
  }
}

async function fetchComments(auth, ownerId, postId) {
  console.log(ownerId);
  console.log(postId);

  const data = await Http.get(
    'https://api.vk.com/method/wall.getComments?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&need_likes=1&sort=asc&extended=1&fields=photo_50&count=50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  console.log(data);
  return await data.response;
}
