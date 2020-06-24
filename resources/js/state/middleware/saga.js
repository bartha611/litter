import { fork, all } from 'redux-saga/effects';
import authSaga from '../ducks/auth/sagas';
import tweetSaga from '../ducks/tweets/sagas';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(tweetSaga)]);
}
