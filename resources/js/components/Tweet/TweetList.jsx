import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

export const TweetList = () => {
  const { tweets } = useSelector(state => state.tweets);
  return (
    <div>
      {tweets.map(tweet => {
        return (
          <Tweet key={tweet.id} tweet={tweet} options={true} main={false} parent={false} />
        );
      })}
    </div>
  );
};

export default TweetList;
