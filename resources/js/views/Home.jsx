import React, { useEffect, lazy } from 'react';
import { fetchTweets } from '../../js/state/ducks/tweets';
import { useDispatch } from 'react-redux';

const TweetButton = lazy(() =>
  import(
    /* webpackChunkName: 'tweetButton' */ '../components/Tweet/TweetButton'
  )
);

const TweetList = lazy(() =>
  import(/* webpackChunkName: 'tweetList' */ '../components/Tweet/TweetList')
);

import { useFetchTweets } from '../utils/useFetchTweet';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets('/api/tweet', 'GET', 'READ'));
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
