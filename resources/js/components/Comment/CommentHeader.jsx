import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from '../Tweet/Tweet';

const CommentHeader = () => {
  const { parent_tweets } = useSelector(state => state.replies);

  return (
    <div>
      {parent_tweets &&
        parent_tweets.map((tweet, index) => {
          return (
            <Tweet
              tweet={tweet}
              options={true}
              key={tweet.id}
              main={index === parent_tweets.length - 1 ? true: false} 
              parent={index === parent_tweets.length - 1 ? false : true}
            />
          );
        })}
    </div>
  );
};

export default CommentHeader;
