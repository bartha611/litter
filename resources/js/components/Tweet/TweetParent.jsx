import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

/**
 * @param {object} props Component props
 * @param {Object} props.tweet - The Tweet that will be rendered into HTML
 * @param {string} props.tweet.id - Id of the tweet
 * @param {string} props.tweet.tweet - The content of the tweet
 * @param {number} props.tweet.likes_count - The total likes of the tweet
 * @param {number} props.tweet.retweets_count - The total retweets of tweet
 * @param {number} props.tweet.replies_count - The total replies of the tweet
 * @param {string} props.tweet.updated_at - The time when tweet was last updated
 * @param {Object} props.tweet.user - The user who wrote the tweet
 * @param {string} props.tweet.user.username - The username of user who wrote the tweet
 * @param {string} props.tweet.user.name - The name of the user who wrote the tweet
 * @param {string} props.tweet.user.profile_photo - The profile photo of user who wrote the tweet
 *
 */

const TweetParent = ({ tweet }) => {
  const location = useLocation();

  const getTime = ({ updated_at }) => {
    const date = new Date(updated_at);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const meridian = hours > 12 ? 'PM' : 'AM';
    hours = hours % 12 === 0 ? 12 : hours % 12;

    return `${hours}:${minutes} ${meridian}`;
  };

  const formatCounts = count => {
    if (count < 1000) {
      return `${count} `;
    } else if (count < 10000000) {
      return `${_.round(count / 1000, 1)}K `;
    } else {
      return `${_.round(count / 1000000)}M `;
    }
  };

  const sanitizeDate = ({ updated_at }) => {
    const newDate = new Date(updated_at).toDateString();
    return newDate
      .split(' ')
      .slice(1, 4)
      .join(' ');
  };

  return (
    <div className="TweetParent">
      <div className="TweetParent__header">
        <div className="TweetParent__image">
          <img
            src={tweet.user.profile_photo}
            alt="User Profile photo"
            className="TweetParent__photo"
          />
        </div>
        <div className="TweetParent__info">
          <div className="TweetParent__author">
            <Link to={`/${encodeURIComponent(tweet.user.username)}`}>
              <span>{tweet.user.name}</span>
            </Link>
          </div>
          <div className="TweetParent__username">{tweet.user.username}</div>
        </div>
      </div>
      <div className="TweetParent__body">
        <div className="TweetParent__tweet">{tweet.tweet}</div>
        <div className="TweetParent__dateInfo">
          <span className="TweetParent__time">{getTime(tweet)} </span>
          <span className="TweetParent__date">{sanitizeDate(tweet)}</span>
        </div>
        <div className="TweetParent__stats">
          <span className="TweetParent__retweets">
            <Link
              to={{
                pathname: `${location.pathname}/retweets`,
                state: { background: location }
              }}
            >
              <span className="TweetParent__counts">
                {formatCounts(tweet.retweets_count)}
              </span>
              Retweets
            </Link>
          </span>
          <span className="TweetParent__likes">
            <Link
              to={{
                pathname: `${location.pathname}/likes`,
                state: {
                  background: location
                }
              }}
            >
              <span className="TweetParent__counts">
                {formatCounts(tweet.likes_count)}
              </span>
              Likes
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

TweetParent.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    replies_count: PropTypes.number.isRequired,
    likes_count: PropTypes.number.isRequired,
    liked_tweet: PropTypes.number.isRequired,
    retweets_count: PropTypes.number.isRequired,
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

export default TweetParent;
