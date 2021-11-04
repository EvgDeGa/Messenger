import {takeEvery} from 'redux-saga/effects';
import {
  LIKE_POST,
  REQUEST_COMMENTS,
  REQUEST_GALLERY,
  REQUEST_POSTS,
  REQUEST_SEARCH,
  REQUEST_SELFINF,
  SEND_COMMENT,
  LIKE_COMMENT,
} from '../constants/constants';
import {selfInfWorker} from './selfInfSaga';
import {galleryWorker} from './gallerySaga';
import {searchWorker} from './searchSaga';
import {postWorker, postLikeWorker} from './postSaga';
import {
  commentPostWorker,
  commentWorker,
  commentLikeWorker,
} from './commentSaga';

function* sagaWatcher() {
  yield takeEvery(REQUEST_SELFINF, selfInfWorker);
  yield takeEvery(REQUEST_GALLERY, galleryWorker);
  yield takeEvery(REQUEST_SEARCH, searchWorker);
  yield takeEvery(REQUEST_POSTS, postWorker);
  yield takeEvery(REQUEST_COMMENTS, commentWorker);
  yield takeEvery(SEND_COMMENT, commentPostWorker);
  yield takeEvery(LIKE_COMMENT, commentLikeWorker);
  yield takeEvery(LIKE_POST, postLikeWorker);
}

export default sagaWatcher;
