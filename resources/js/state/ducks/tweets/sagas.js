import * as actions from './actions';
import apiService from '../../utils/apiService';
import { takeLatest, put, call } from 'redux-saga/effects';

const operation = data => {
  return {
    READ: actions.tweetRead(data),
    POST: actions.tweetCreate(data),
    PAGINATE: actions.tweetPaginate(data),
    DELETE: actions.tweetDelete(data),
    UPDATE: actions.tweetUpdate(data)
  };
};

export function* fetchTweets(action) {
  yield put(actions.tweetLoad());
  try {
    const { data, error } = yield call(apiService, action);
    if (error) {
      yield put(actions.tweetError());
    }
    yield put(operation(data)[action.meta.operation]);
  } catch (err) {
    yield put(actions.tweetError());
  }
}

export default function* tweetSaga() {
  yield takeLatest('TWEET_REQUEST', fetchTweets);
}
