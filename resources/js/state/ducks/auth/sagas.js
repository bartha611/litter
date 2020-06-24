import * as types from './types';
import * as actions from './actions';
import apiService from '../../utils/apiService';
import { takeLatest, put, call } from 'redux-saga/effects';

export function* fetchUser(action) {
  yield put(actions.authLoad());
  try {
    const data = yield call(apiService, action);
    if (action.meta.operation === 'LOGIN') {
      localStorage.setItem('token', data.token);
      yield put(actions.authLogin(data.user));
    } else {
      localStorage.removeItem('token');
      yield put(actions.authLogout());
    }
  } catch (err) {
    yield put(actions.authError());
  }
}

export default function* authSaga() {
  takeLatest(types.AUTH_REQUEST, fetchUser);
}
