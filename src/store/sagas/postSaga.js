import {put, call} from 'redux-saga/effects';
import {FETCH_POSTS, LIKED_POST} from '../constants/constants';
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

export function* postLikeWorker(action) {
  try {
    // yield put(showLoader());
    if (action.userLikes) {
      const payload = yield call(
        dislikePost,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      yield put({
        type: LIKED_POST,
        payload: payload,
        userLikes: action.userLikes,
        ownerId: action.ownerId,
        itemId: action.itemId,
      });
    } else {
      const payload = yield call(
        likePost,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      yield put({
        type: LIKED_POST,
        payload: payload,
        userLikes: action.userLikes,
        ownerId: action.ownerId,
        itemId: action.itemId,
      });
    }
    // yield put(hideLoader());
  } catch (e) {
    console.log('postLikeWorker-error', e);
    // yield put(hideLoader());
  }
}

async function likePost(auth, ownerId, itemId) {
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

async function dislikePost(auth, ownerId, itemId) {
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
