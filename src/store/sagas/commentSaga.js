import {put, call} from 'redux-saga/effects';
import {
  FETCH_COMMENTS,
  POST_COMMENT,
  LIKED_COMMENT,
} from '../constants/constants';
import {Http} from '../http';
import {showLoader, hideLoader} from '../actions/loaderAction';

export function* commentWorker(action) {
  try {
    yield put(showLoader());
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
        // console.log('repcom', repCom);
        payload.items[i].thread.items = repCom.items;
        payload.profiles.concat(repCom.profiles);
        payload.profiles = payload.profiles.concat(repCom.profiles);
      }
    }
    yield put({type: FETCH_COMMENTS, payload});
    yield put(hideLoader());
  } catch (e) {
    console.log('commentWorker-error', e);
    yield put(hideLoader());
  }
}

async function fetchComments(auth, ownerId, postId) {
  const data = await Http.get(
    'https://api.vk.com/method/wall.getComments?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&need_likes=1&sort=asc&extended=1&fields=photo_50&count=50&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  // console.log(data);
  return await data.response;
}

async function fetchReplyComments(auth, ownerId, postId, comment_id) {
  const data = await Http.get(
    'https://api.vk.com/method/wall.getComments?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&need_likes=1&sort=asc&extended=1&fields=photo_50&count=50&comment_id=' +
      comment_id +
      '&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  // console.log(data);
  return await data.response;
}

export function* commentPostWorker(action) {
  try {
    // yield put(showLoader());
    // console.log('ddds', action.auth);
    const post = yield call(
      psotComments,
      action.message,
      action.replyToComment,
      action.auth,
      action.postId,
      action.ownerId,
    );
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
        // console.log('repcom', repCom);
        payload.items[i].thread.items = repCom.items;
      }
    }
    yield put({type: FETCH_COMMENTS, payload});
    // yield put(hideLoader());
  } catch (e) {
    console.log('commentPostWorker-error', e);
    // yield put(hideLoader());
  }
}

async function psotComments(message, replyToComment, auth, postId, ownerId) {
  const parent = replyToComment ? '&reply_to_comment=' + replyToComment : '';
  const data = await Http.post(
    'https://api.vk.com/method/wall.createComment?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&message=' +
      message +
      parent +
      '&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  // console.log(data);
  return await data.response;
}

export function* commentLikeWorker(action) {
  try {
    // yield put(showLoader());
    if (action.userLikes) {
      const payload = yield call(
        dislikeComment,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      yield put({
        type: LIKED_COMMENT,
        payload: payload,
        userLikes: action.userLikes,
        ownerId: action.ownerId,
        itemId: action.itemId,
      });
    } else {
      const payload = yield call(
        likeComment,
        action.auth,
        action.ownerId,
        action.itemId,
      );
      yield put({
        type: LIKED_COMMENT,
        payload: payload,
        userLikes: action.userLikes,
        ownerId: action.ownerId,
        itemId: action.itemId,
      });
    }
    // yield put(hideLoader());
  } catch (e) {
    console.log('commentLikeWorker-error', e);
    // yield put(hideLoader());
  }
}

async function likeComment(auth, ownerId, itemId) {
  const data = await Http.post(
    'https://api.vk.com/method/likes.add?type=comment&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}

async function dislikeComment(auth, ownerId, itemId) {
  const data = await Http.post(
    'https://api.vk.com/method/likes.delete?type=comment&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&filters=post&count=5&access_token=' +
      auth.accessToken +
      '&v=5.131',
  );
  return await data.response;
}
