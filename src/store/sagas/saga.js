import {takeEvery, put, call} from 'redux-saga/effects';
import {
  FETCH_SELFINF,
  REQUEST_GALLERY,
  REQUEST_SEARCH,
  REQUEST_SELFINF,
} from '../constants/constants';
import {selfInfWorker} from './selfInfSaga';
import {galleryWorker} from './gallerySaga';
import {searchWorker} from './searchSaga';

function* sagaWatcher() {
  yield takeEvery(REQUEST_SELFINF, selfInfWorker);
  yield takeEvery(REQUEST_GALLERY, galleryWorker);
  yield takeEvery(REQUEST_SEARCH, searchWorker);
}

export default sagaWatcher;
