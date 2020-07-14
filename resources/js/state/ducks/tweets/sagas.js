import * as actions from './actions';
import apiService from '../../utils/apiService';
import { takeLatest, put, call } from 'redux-saga/effects';

const methods = {
  GET: 'READ',
  POST: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export function* fetchTweets(action) {
  yield put(actions.tweetLoad());
  try {
    const { data } = yield call(apiService, action);
    if (!data) {
      yield put(actions.tweetError());
    }
    yield put({
      type: `TWEET_${methods[action.meta.method]}`,
      payload: data
    });
  } catch (err) {
    yield put(actions.tweetError());
  }
}

export default function* tweetSaga() {
  yield takeLatest('TWEET_REQUEST', fetchTweets);
}
