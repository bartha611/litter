import * as actions from './actions';
import apiService from '../../utils/apiService';
import { put, call, takeEvery } from 'redux-saga/effects';

export function* fetchUser(action) {
  yield put(actions.authLoad());
  const { history } = action.meta;
  try {
    const { data, error } = yield call(apiService, action);
    if (error) {
      yield put(actions.authError());
    }
    if (
      action.meta.operation === 'LOGIN' ||
      action.meta.operation === 'SIGNUP'
    ) {
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
