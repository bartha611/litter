import * as types from './types';
import * as actions from './actions';
import apiService from '../../utils/apiService';
import { put, call, takeEvery } from 'redux-saga/effects';

const operation = data => {
  return {
    READ: actions.followerRead(data),
    POST: actions.followerCreate(data),
    PAGINATE: actions.followerPaginate(data),
    DELETE: actions.followerDelete(data)
  };
};

export function* fetchFollowers(action) {
  yield put(actions.followerLoad());
  try {
    const { data, error } = yield call(apiService, action);
    if (error) {
      yield put(actions.followerError());
    }
    console.log(data);
    yield put(operation(data)[action.meta.operation]);
  } catch (err) {
    console.log(err);
    yield put(actions.followerError());
  }
}

export default function* followerSaga() {
  yield takeEvery(types.FOLLOWER_REQUEST, fetchFollowers);
}
