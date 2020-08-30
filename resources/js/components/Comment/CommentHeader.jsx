import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CommentHeader = () => {
  const history = useHistory();
  const { tweets, loading } = useSelector(state => state.comments);
  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  return (
    <div>
      {tweets && (
        <div key={tweets.id} className="tweet border__header">
          <div className="tweet__image">
            <img
              src={tweets.profile_photo}
              className="tweet__photo"
              alt="user profile photo"
            />
          </div>
          <div className="tweet__body">
            <div className="tweet__info">
              <a className="link link--underline" href={`/${tweets.username}`}>
                <span className="tweet__author">
                  <b>{tweets.name}</b>
                </span>
              </a>
              <span className="text-muted ml-2 tweet__username">
                @{tweets.username}
              </span>
              <span className="text-muted ml-2 tweet__date">
                {sanitizeDate(tweets.updated_at)}
              </span>
            </div>
            <div className="tweet__tweet">{tweets.tweet}</div>
            {loading && <div>IsLoading</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentHeader;
