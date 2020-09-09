import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Tweet from './Tweet';

const Options = lazy(() =>
  import(/* webpackChunkName: 'Options' */ '../utils/Options')
);

export const TweetList = () => {
  const history = useHistory();
  const { tweets } = useSelector(state => state.tweets);

  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  const toggle = (event, tweet) => {
    if (typeof event.target.className !== 'object') {
      history.push(`${tweet.username}/status/${tweet.id}`);
    }
  };

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
