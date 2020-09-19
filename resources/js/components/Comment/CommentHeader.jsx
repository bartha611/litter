import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Tweet from '../tweets/Tweet';

const CommentHeader = () => {
  const { parent_tweets } = useSelector(state => state.replies);

  return (
    <div>
      {parent_tweets &&
        parent_tweets.map(tweet => {
          return (
            <Tweet
              tweet={tweet}
              disabled={false}
              options={true}
              key={tweet.id}
            />
          );
        })}
    </div>
  );
};

export default CommentHeader;
