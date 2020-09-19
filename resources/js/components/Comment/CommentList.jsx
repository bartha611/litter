import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from '../tweets/Tweet';

const CommentList = () => {
  const { reply_tweets } = useSelector(state => state.replies);
  return (
    <div>
      {reply_tweets.map(comment => {
        return (
          <Tweet
            key={comment.id}
            tweet={comment}
            options={true}
            disabled={false}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
