import { takeLatest } from 'redux-saga/effects';

export default function* tweetSaga() {
  yield takeLatest('TWEET_REQUEST', fetchTweets);
}
