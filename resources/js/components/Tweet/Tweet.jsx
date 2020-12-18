import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import TweetHandler from './TweetHandlers';

/**
 * @param {object} props Component props
 * @param {Object} props.tweet - The Tweet that will be rendered into HTML
 * @param {string} props.tweet.id - Id of the tweet
 * @param {string} props.tweet.tweet - The content of the tweet
 * @param {number} props.tweet.likes_count - The total likes of the tweet
 * @param {number} props.tweet.retweet_count - The total retweets of tweet
 * @param {number} props.tweet.replies_count - The total replies of the tweet
 * @param {string} props.tweet.updated_at - The time when tweet was last updated
 * @param {Object} props.tweet.user - The user who wrote the tweet
 * @param {string} props.tweet.user.username - The username of user who wrote the tweet
 * @param {string} props.tweet.user.name - The name of the user who wrote the tweet
 * @param {string} props.tweet.user.profile_photo - The profile photo of user who wrote the tweet
 * @param {boolean} props.disabled - Boolean that determines whether links are disabled
 * @param {boolean} props.line - Boolean that determines whether there is a line from image to next tweet
 *
 */

const Tweet = ({ tweet, disabled, line }) => {
  const history = useHistory();

  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  const toggle = e => {
    console.log(e.target.className);
    if (
      e.target.className !== 'tweet__author' &&
      e.target.className !== 'handlers__button' &&
      typeof e.target.className !== 'object'
    ) {
      history.push(`/${tweet.user.username}/status/${tweet.id}`);
    }
  };

  const _onClick = e => {
    if (disabled) {
      e.preventDefault();
      console.log('hello there');
    }
  };

  return (
    <div
      key={tweet.id}
      className={`tweet ${disabled ? 'tweet--disabled' : 'tweet--enabled'}`}
      onClick={toggle}
    >
      <div className="tweet__image">
        <img
          src={tweet.user.profile_photo}
          className="tweet__photo"
          alt="user profile photo"
        />
        {line && <hr className="tweet__line" />}
      </div>
      <div className="tweet__body">
        <div className="tweet__info">
          <Link
            className={`${
              disabled ? 'tweet__author--disabled' : 'tweet__author--enabled'
            }`}
            to={`/${encodeURIComponent(tweet.user.username)}`}
            onClick={e => _onClick(e)}
          >
            <span className="tweet__author">{tweet.user.name}</span>
          </Link>
          <span className="tweet__username">@{tweet.user.username}</span>
          <span className="tweet__date">{sanitizeDate(tweet.updated_at)}</span>
        </div>
        <div className="tweet__tweet">{tweet.tweet}</div>
        <TweetHandler tweet={tweet} counts={true} />
      </div>
    </div>
  );
};

Tweet.propTypes = {
  options: PropTypes.bool.isRequired,
  parent: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  line: PropTypes.bool.isRequired,
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    replies_count: PropTypes.number.isRequired,
    likes_count: PropTypes.number.isRequired,
    liked_tweet: PropTypes.number.isRequired,
    tweet: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_photo: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Tweet;
