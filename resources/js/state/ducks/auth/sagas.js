import * as types from './types';
import * as actions from './actions';
import apiService from '../../utils/apiService';
import { takeLatest, put, call } from 'redux-saga/effects';

function* fetchUser(action) {
  yield put(actions.authLoad());
  try {
    const data = yield call(apiService, action);
    yield put({
      type: `AUTH_${action.meta.operation}`,
      payload: action.payload
    });
  } catch (err) {
    yield put(actions.authError());
  }
}

export default function* authSaga() {
  takeLatest(types.AUTH_REQUEST, fetchUser);
}
