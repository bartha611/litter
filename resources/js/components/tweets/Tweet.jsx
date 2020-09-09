import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Options = lazy(() =>
  import(/* webpackChunkName: 'Options' */ '../utils/Options')
);

const Tweet = ({ tweet, disabled, options }) => {
  const history = useHistory();
  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  const toggle = (event, tweet) => {
    if (typeof event.target.className !== 'object' && !disabled) {
      history.push(`${tweet.username}/status/${tweet.id}`);
    }
  };

  return (
    <div
      key={tweet.id}
      className={`border-right border-left border-bottom tweet ${
        disabled ? 'tweet--disabled' : 'tweet--enabled'
      }`}
      onClick={event => toggle(event, tweet)}
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
            className={`tweet__author${disabled ? '--disabled' : ''}`}
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
        {options && <Options tweet={tweet} />}
        {tweet.loading && <div>IsLoading</div>}
      </div>
    </div>
  );
};

Tweet.propTypes = {
  disabled: PropTypes.bool.isRequired,
  options: PropTypes.bool.isRequired,
  tweet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    comment_count: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    likes_count: PropTypes.string.isRequired,
    liked_tweet: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
    profile_photo: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired
};

export default Tweet;
