import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from '../Tweet/Tweet';
import TweetParent from '../Tweet/TweetParent';

const CommentHeader = () => {
  const { parent_tweets } = useSelector(state => state.replies);

  return (
    <div>
      {parent_tweets &&
        parent_tweets.map((tweet, index) => {
          return index !== parent_tweets.length - 1 ? (
            <Tweet tweet={tweet} key={tweet.id} disabled={false} line={true} />
          ) : (
            <TweetParent key={tweet.id} tweet={tweet} />
          );
        })}
    </div>
  );
};

export default CommentHeader;
