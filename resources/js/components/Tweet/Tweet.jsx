import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Options = lazy(() =>
  import(/* webpackChunkName: 'Options' */ '../utils/Options')
);

const Tweet = ({ tweet , options, parent, main }) => {
  const history = useHistory();
  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  const getTime = date => {
    const newDate = new Date(date)
    return newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true});
  }

  const toggle = (event, tweet) => {
    if (typeof event.target.className !== 'object') {
      history.push(`/${tweet.username}/status/${tweet.id}`);
    }
  };

  return (
    <div
      key={tweet.id}
      className={`border-right border-left border-bottom tweet`
      }
      onClick={event => toggle(event, tweet)}
    >
      <div className="tweet__image">
        <img
          src={tweet.profile_photo}
          className="tweet__photo"
          alt="user profile photo"
        />
        {parent && (
          <hr className="tweet__line" />
        )}
      </div>
      <div className="tweet__body">
        <div className="tweet__info">
          <a
            className={`tweet__author`}
            href={`/${encodeURIComponent(tweet.username)}`}
          >
            <span>
              <b>{tweet.name}</b>
            </span>
          </a>
          <span className={`text-muted ml-2 tweet__username ${main ? `tweet__username--block`: ""}`}>
            @{tweet.username}
          </span>
          <span className={`text-muted ml-2 tweet__date ${main ? `tweet__date--disabled` : ``}`}>
            {sanitizeDate(tweet.updated_at)}
          </span>
        </div>
        <div className={`tweet__tweet ${main ? `tweet__tweet--font`: ``}`}>{tweet.tweet}</div>
        {main && (
          <div className="tweet__mainInfo">
            <span className={"text-muted ml-2 tweet__time"}>{getTime(tweet.updated_at)}</span>
            <span className="text-muted ml-2 tweet__date">{sanitizeDate(tweet.updated_at)}</span>
          </div>
        )}
        {options && <Options tweet={tweet} />}
        {tweet.loading && <div>IsLoading</div>}
      </div>
    </div>
  );
};

Tweet.propTypes = {
  options: PropTypes.bool.isRequired,
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    replies_count: PropTypes.number.isRequired,
    likes_count: PropTypes.number.isRequired,
    liked_tweet: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
    profile_photo: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired
};

export default Tweet;
