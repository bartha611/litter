import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { tweetRequest } from '../../state/ducks/tweets/actions';
import { useParams } from 'react-router-dom';

const TweetList = lazy(() =>
  import(/* webpackChunkName: 'tweetList' */ '../tweets/tweetList')
);

const Background = lazy(() =>
  import(/* webpackChunkName: 'Profile_background' */ '../profileBackground')
);

import { useFetchTweet } from '../../utils/useFetchTweet';

const Profile = () => {
  const dispatch = useDispatch();
  let { name } = useParams();

  useEffect(() => {
    dispatch(tweetRequest(`/api/tweet/${name}`, 'GET'));
  }, []);

  useFetchTweet(name);

  return (
    <div>
      <Background />
      <TweetList />
    </div>
  );
};

export default Profile;
