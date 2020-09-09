import React from 'react';
import { useSelector } from 'react-redux';

const CommentList = () => {
  const { comments, tweets } = useSelector(state => state.comments);

  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  return (
    <div>
      {comments.map(comment => {
        return (
          <div
            key={comment.id}
            className="border-right border-left border-bottom comment"
          >
            <div className="comment__image">
              <img
                src={comment.profile_photo}
                alt={`${comment.username} profile photo`}
                className="comment__photo"
              />
            </div>
            <div className="comment__body">
              <div className="comment__info">
                <a
                  className="link link--underline"
                  href={`/${comment.username}`}
                >
                  <span className="comment__author">
                    <b>{comment.name}</b>
                  </span>
                </a>
                <span className="text-muted ml-2 comment__username">
                  @{comment.username}
                </span>
                <span className="text-muted ml-2 comment__date">
                  {sanitizeDate(comment.updated_at)}
                </span>
                <div className="text-muted comment__tweetName">
                  Replying to @
                  <a href={`/${encodeURIComponent(tweets.username)}`}>
                    {tweets.username}
                  </a>
                </div>
              </div>
              <div className="comment__comment">{comment.comment}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
