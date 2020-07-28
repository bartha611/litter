import React, { useEffect, lazy } from 'react';
import { tweetRequest } from '../../js/state/ducks/tweets/actions';
import { useDispatch } from 'react-redux';

const TweetButton = lazy(() =>
  import(
    /* webpackChunkName: 'tweetButton' */ '../components/tweets/tweetButton'
  )
);

const TweetList = lazy(() =>
  import(/* webpackChunkName: 'tweetList' */ '../components/tweets/tweetList')
);

import { useFetchTweets } from '../utils/useFetchTweet';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tweetRequest('/api/tweet', 'GET', 'READ'));
  }, []);

  useFetchTweets('/api/tweet', null);
  return (
    <div>
      <TweetButton />
      <TweetList />
    </div>
  );
};

export default Home;
