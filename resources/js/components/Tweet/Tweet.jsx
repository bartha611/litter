import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import TweetHandler from './TweetHandlers';
import Options from '../utils/Options';

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
 * @param {boolean} props.options - Boolean that determines whether to populate with tweet handlers
 * @param {boolean} props.parent - Boolean that determines whether tweet is the parent
 * @param {boolean} props.disabled - Boolean that determines whether links are disabled
 * @param {boolean} props.line - Boolean that determines whether there is a line from image to next tweet
 *
 */

const Tweet = ({ tweet, options, parent, disabled, line }) => {
  const history = useHistory();

  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  const getTime = date => {
    const newDate = new Date(date);
    return newDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const toggle = (event, tweet) => {
    console.log(event.target.className);
    console.log(event.target.className == 'tweet__tweet');
    if (event.target.className === 'tweet__tweet' && !disabled) {
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
      className={`border-right border-left border-bottom tweet ${
        disabled ? '' : 'tweet--disabled'
      }`}
      onClick={event => toggle(event, tweet)}
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
          <span
            className={`text-muted tweet__username ${
              parent ? `tweet__username--block` : 'tweet__username--span'
            }`}
          >
            @{tweet.user.username}
          </span>
          <span
            className={`text-muted tweet__date ${
              parent ? `tweet__date--disabled` : ``
            }`}
          >
            {sanitizeDate(tweet.updated_at)}
          </span>
        </div>
        <div className={`tweet__tweet ${parent ? `tweet__tweet--font` : ``}`}>
          {tweet.tweet}
        </div>
        {parent && (
          <div className="tweet__parentInfo">
            <span className={'text-muted tweet__time'}>
              {getTime(tweet.updated_at)}
            </span>
            <span className="text-muted tweet__date">
              {sanitizeDate(tweet.updated_at)}
            </span>
          </div>
        )}
        {parent && (
          <div className="tweet__handlers">
            <TweetHandler />
          </div>
        )}
        {options && <Options tweet={tweet} />}
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
