import {put, call} from 'redux-saga/effects';
import {FETCH_SELFINF, FETCH_SELFINF_FAILURE} from '../constants/constants';
import {showLoader, hideLoader} from '../actions/loaderAction';
import {fetchSelfInf} from '../services/selfInf';

export function* selfInfWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchSelfInf, action.auth);
    if (payload.error) {
      yield put({type: FETCH_SELFINF_FAILURE, error: payload.error});
    } else {
      yield put({type: FETCH_SELFINF, payload});
      yield put(hideLoader());
    }
  } catch (e) {
    console.log('selfInfWorker-error', e);
    yield put(hideLoader());
  }
}
