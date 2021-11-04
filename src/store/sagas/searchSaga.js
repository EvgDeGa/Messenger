import {put, call} from 'redux-saga/effects';
import {
  FETCH_FRIENDS,
  FETCH_GROUP,
  FETCH_GROUP_FAILURE,
  FETCH_FRIENDS_FAILURE,
} from '../constants/constants';
import {showLoader, hideLoader} from '../actions/loaderAction';
import {fetchFriends, fetchGroup} from '../services/search';

export function* searchWorker(action) {
  try {
    yield put(showLoader());
    const payloadFriends = yield call(fetchFriends, action.auth);
    const payloadGroup = yield call(fetchGroup, action.auth);
    if (payloadGroup.error) {
      yield put({type: FETCH_GROUP_FAILURE, error: payloadGroup.error});
    } else {
      yield put({type: FETCH_GROUP, payload: payloadGroup});
      yield put(hideLoader());
    }
    if (payloadFriends.error) {
      yield put({type: FETCH_FRIENDS_FAILURE, error: payloadFriends.error});
    } else {
      yield put({type: FETCH_FRIENDS, payload: payloadFriends});
      yield put(hideLoader());
    }
  } catch (e) {
    console.log('searchleryWorker-error', e);
    yield put(hideLoader());
  }
}
