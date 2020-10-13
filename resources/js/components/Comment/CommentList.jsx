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
            tweet={comment}
            options={true}
            main={false}
            parent={false}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
