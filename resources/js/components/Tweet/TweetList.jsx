import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

/**
 * Component that displays list of tweets
 */

export const TweetList = () => {
  const { tweets } = useSelector(state => state.tweets);
  return (
    <div className="tweetList">
      {tweets.map(tweet => {
        return (
          <Tweet key={tweet.id} tweet={tweet} line={false} disabled={false} />
        );
      })}
    </div>
  );
};

export default TweetList;
