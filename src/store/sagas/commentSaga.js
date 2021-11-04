import {put, call} from 'redux-saga/effects';
import {
  FETCH_COMMENTS,
  POST_COMMENT,
  LIKED_COMMENT,
  FETCH_COMMENT_FAILURE,
} from '../constants/constants';
import {showLoader, hideLoader} from '../actions/loaderAction';
import {
  fetchComments,
  fetchReplyComments,
  postComments,
  dislikeComment,
  likeComment,
} from '../services/comment';

export function* commentWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(
      fetchComments,
      action.auth,
      action.ownerId,
      action.postId,
    );
    if (payload.error) {
      yield put({type: FETCH_COMMENT_FAILURE, error: payload.error});
    } else {
      for (let i = 0; i < payload.items.length; i++) {
        if (payload.items[i].thread.count) {
          const repCom = yield call(
            fetchReplyComments,
            action.auth,
            action.ownerId,
            action.postId,
            payload.items[i].id,
          );
          payload.items[i].thread.items = repCom.items;
          payload.profiles.concat(repCom.profiles);
          payload.profiles = payload.profiles.concat(repCom.profiles);
        }
      }
      yield put({type: FETCH_COMMENTS, payload});
      yield put(hideLoader());
    }
  } catch (e) {
    console.log('commentWorker-error', e);
    yield put(hideLoader());
  }
}

export function* commentPostWorker(action) {
  try {
    const post = yield call(
      postComments,
      action.message,
      action.replyToComment,
      action.auth,
      action.postId,
      action.ownerId,
    );
    if (payload.error) {
      yield put({type: FETCH_COMMENT_FAILURE, error: payload.error});
    } else {
      yield put({type: POST_COMMENT, post});
      const payload = yield call(
        fetchComments,
        action.auth,
        action.ownerId,
        action.postId,
      );
      for (let i = 0; i < payload.items.length; i++) {
        if (payload.items[i].thread.count) {
          const repCom = yield call(
            fetchReplyComments,
            action.auth,
            action.ownerId,
            action.postId,
            payload.items[i].id,
          );
          payload.items[i].thread.items = repCom.items;
        }
      }
      yield put({type: FETCH_COMMENTS, payload});
    }
  } catch (e) {
    console.log('commentPostWorker-error', e);
  }
}

export function* commentLikeWorker(action) {
  try {
    if (action.userLikes) {
      const payload = yield call(
        dislikeComment,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      if (payload.error) {
        yield put({type: FETCH_COMMENT_FAILURE, error: payload.error});
      } else {
        yield put({
          type: LIKED_COMMENT,
          payload: payload,
          userLikes: action.userLikes,
          ownerId: action.ownerId,
          itemId: action.itemId,
        });
      }
    } else {
      const payload = yield call(
        likeComment,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      if (payload.error) {
        yield put({type: FETCH_COMMENT_FAILURE, error: payload.error});
      } else {
        yield put({
          type: LIKED_COMMENT,
          payload: payload,
          userLikes: action.userLikes,
          ownerId: action.ownerId,
          itemId: action.itemId,
        });
      }
    }
  } catch (e) {
    console.log('commentLikeWorker-error', e);
  }
}
