import * as types from './types';
import * as actions from './actions';
import apiService from '../../utils/apiService';
import { put, call, takeEvery } from 'redux-saga/effects';

export function* fetchSearch(action) {
  yield put(actions.searchLoad());
  try {
    const { data, error } = yield call(apiService, action);
    if (error) {
      yield put(actions.searchError());
    }
    yield put(actions.searchRead(data));
  } catch (err) {
    yield put(actions.searchError());
  }
}

export default function* searchSaga() {
  yield takeEvery(types.SEARCH_REQUEST, fetchSearch);
}
