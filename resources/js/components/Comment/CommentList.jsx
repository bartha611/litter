import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from '../Tweet/Tweet';

const CommentList = () => {
  const { reply_tweets } = useSelector(state => state.replies);
  return (
    <div>
      {reply_tweets.map(comment => {
        return (
          <Tweet
            key={comment.id}
            disabled={false}
            tweet={comment}
            line={false}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
