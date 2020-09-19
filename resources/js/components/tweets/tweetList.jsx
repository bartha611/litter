import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Tweet from './Tweet';

const Options = lazy(() =>
  import(/* webpackChunkName: 'Options' */ '../utils/Options')
);

export const TweetList = () => {
  const { tweets } = useSelector(state => state.tweets);
  return (
    <div>
      {tweets.map(tweet => {
        return (
          <Tweet key={tweet.id} tweet={tweet} disabled={false} options={true} />
        );
      })}
    </div>
  );
};

export default TweetList;
