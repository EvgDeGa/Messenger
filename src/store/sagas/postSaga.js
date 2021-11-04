import {put, call} from 'redux-saga/effects';
import {
  FETCH_POSTS,
  LIKED_POST,
  FETCH_POSTS_FAILURE,
} from '../constants/constants';
import {showLoader, hideLoader} from '../actions/loaderAction';
import {fetchPosts, likePost, dislikePost} from '../services/post';

export function* postWorker(action) {
  try {
    yield put(showLoader());
    const payloadPosts = yield call(fetchPosts, action.auth);
    if (payloadPosts.error) {
      yield put({type: FETCH_POSTS_FAILURE, error: payloadPosts.error});
    } else {
      yield put({type: FETCH_POSTS, payload: payloadPosts});
      yield put(hideLoader());
    }
  } catch (e) {
    console.log('postsWorker-error', e);
    yield put(hideLoader());
  }
}

export function* postLikeWorker(action) {
  try {
    if (action.userLikes) {
      const payload = yield call(
        dislikePost,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      if (payload.error) {
        yield put({type: FETCH_POSTS_FAILURE, error: payload.error});
      } else {
        yield put({
          type: LIKED_POST,
          payload: payload,
          userLikes: action.userLikes,
          ownerId: action.ownerId,
          itemId: action.itemId,
        });
      }
    } else {
      const payload = yield call(
        likePost,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      if (payload.error) {
        yield put({type: FETCH_POSTS_FAILURE, error: payload.error});
      } else {
        yield put({
          type: LIKED_POST,
          payload: payload,
          userLikes: action.userLikes,
          ownerId: action.ownerId,
          itemId: action.itemId,
        });
      }
    }
  } catch (e) {
    console.log('postLikeWorker-error', e);
  }
}
