import {put, call} from 'redux-saga/effects';
import {FETCH_GALLERY, FETCH_GALLERY_FAILURE} from '../constants/constants';
import {fetchGallery} from '../services/gallery';

export function* galleryWorker(action) {
  try {
    const payload = yield call(fetchGallery, action.auth);
    if (payload.error) {
      yield put({type: FETCH_GALLERY_FAILURE, error: payload.error});
    } else {
      yield put({type: FETCH_GALLERY, payload});
    }
  } catch (e) {
    console.log('galleryWorker-error', e);
  }
}
