import * as types from './types';
import * as actions from './actions';
import apiService from '../../utils/apiService';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as jwt from 'jsonwebtoken';

export function* fetchUser(action) {
  yield put(actions.authLoad());
  const { history } = action.meta;
  try {
    const { data } = yield call(apiService, action);
    if (!data) {
      yield put(actions.authError());
    }
    if (action.meta.operation === 'LOGIN') {
      localStorage.setItem('token', data.token);
      yield put(actions.authLogin(data.user));
      history.push('/');
    } else {
      localStorage.removeItem('token');
      yield put(actions.authLogout());
    }
  } catch (err) {
    console.log(err);
    yield put(actions.authError());
  }
}

export default function* authSaga() {
  yield takeEvery('AUTH_REQUEST', fetchUser);
}
