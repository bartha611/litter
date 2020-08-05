import { fork, all } from 'redux-saga/effects';
import authSaga from '../ducks/auth/sagas';
import tweetSaga from '../ducks/tweets/sagas';
import followerSaga from '../ducks/followers/sagas';
import searchSaga from '../ducks/search/sagas';

export default function* rootSaga() {
  yield all([authSaga(), tweetSaga(), followerSaga(), searchSaga()]);
}
