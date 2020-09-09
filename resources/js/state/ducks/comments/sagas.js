import * as types from './types';
import * as actions from './actions';
import apiService from '../../utils/apiService';
import { takeEvery, put, call } from 'redux-saga/effects';
import { tweetIncrementCommentCount } from '../tweets/actions';

const operation = data => {
  return {
    READ: actions.readComment(data),
    POST: actions.createComment(data),
    PAGINATE: actions.paginateComment(data),
    DELETE: actions.deleteComment(data)
  };
};

export function* fetchComments(action) {
  yield put(actions.loadComment());
  try {
    const { data, error } = yield call(apiService, action);
    if (error) {
      console.log(error);
      yield put(actions.errorComment());
    }
    yield put(operation(data)[action.meta.operation]);
    if (action.meta.operation === 'POST') {
      yield put(tweetIncrementCommentCount(data.tweet_id));
    }
  } catch (err) {
    console.log(err);
    yield put(actions.errorComment());
  }
}

export default function* commentSaga() {
  yield takeEvery(types.COMMENT_REQUEST, fetchComments);
}
