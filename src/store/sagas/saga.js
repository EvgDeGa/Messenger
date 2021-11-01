import {takeEvery} from 'redux-saga/effects';
import {
  REQUEST_COMMENTS,
  REQUEST_GALLERY,
  REQUEST_POSTS,
  REQUEST_SEARCH,
  REQUEST_SELFINF,
} from '../constants/constants';
import {selfInfWorker} from './selfInfSaga';
import {galleryWorker} from './gallerySaga';
import {searchWorker} from './searchSaga';
import {postWorker} from './postSaga';
import {commentWorker} from './commentSaga';

function* sagaWatcher() {
  yield takeEvery(REQUEST_SELFINF, selfInfWorker);
  yield takeEvery(REQUEST_GALLERY, galleryWorker);
  yield takeEvery(REQUEST_SEARCH, searchWorker);
  yield takeEvery(REQUEST_POSTS, postWorker);
  yield takeEvery(REQUEST_COMMENTS, commentWorker);
}

export default sagaWatcher;
