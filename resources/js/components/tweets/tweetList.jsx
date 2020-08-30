import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Options = lazy(() =>
  import(/* webpackChunkName: 'Options' */ '../utils/Options')
);

export const TweetList = () => {
  const history = useHistory();
  const { tweets } = useSelector(state => state.tweets);

  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  return (
    <div>
      {tweets.map(tweet => {
        return (
          <div
            key={tweet.id}
            className="border-right border-left border-bottom tweet"
            onClick={() => history.push(`${tweet.username}/status/${tweet.id}`)}
          >
            <div className="tweet__image">
              <img
                src={tweet.profile_photo}
                className="tweet__photo"
                alt="user profile photo"
              />
            </div>
            <div className="tweet__body">
              <div className="tweet__info">
                <a
                  className="tweet__author"
                  href={`/${encodeURIComponent(tweet.username)}`}
                >
                  <span>
                    <b>{tweet.name}</b>
                  </span>
                </a>
                <span className="text-muted ml-2 tweet__username">
                  @{tweet.username}
                </span>
                <span className="text-muted ml-2 tweet__date">
                  {sanitizeDate(tweet.updated_at)}
                </span>
              </div>
              <div className="tweet__tweet">{tweet.tweet}</div>
              <Options
                comment_count={tweet.comment_count}
                likes_count={tweet.likes_count}
                liked_tweet={tweet.liked_tweet}
              />
              {tweet.loading && <div>IsLoading</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TweetList;
