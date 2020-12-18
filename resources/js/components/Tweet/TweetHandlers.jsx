import React from 'react';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faRetweet,
  faHeart as faHeartFull
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../../state/ducks/tweets';

/**
 * component that renders the tweet options of commenting, retweeting, and liking tweets
 *
 * @param {object} props Component props
 * @param {Object} props.tweet - The Tweet that will be rendered into HTML
 * @param {string} props.tweet.id - Id of the tweet
 * @param {string} props.tweet.tweet - The content of the tweet
 * @param {number} props.tweet.likes_count - The total likes of the tweet
 * @param {number} props.tweet.liked_tweet - Boolean that determines whether logged-in user likes tweet
 * @param {number} props.tweet.retweet_count - The total retweets of tweet
 * @param {number} props.tweet.replies_count - The total replies of the tweet
 * @param {string} props.tweet.updated_at - The time when tweet was last updated
 * @param {Object} props.tweet.user - The user who wrote the tweet
 * @param {string} props.tweet.user.username - The username of user who wrote the tweet
 * @param {string} props.tweet.user.name - The name of the user who wrote the tweet
 * @param {string} props.tweet.user.profile_photo - The profile photo of user who wrote the tweet
 * @param {boolean} props.counts - Boolean that determines whether counts should be shown
 *
 */

const TweetHandler = ({ tweet, counts }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const likeTweet = ({ liked_tweet, id }) => {
    const method = liked_tweet > 0 ? 'DELETE' : 'POST';
    const operation = liked_tweet > 0 ? 'UNLIKE' : 'LIKE';
    dispatch(fetchTweets(`/api/tweet/${id}/likes`, method, operation));
  };

  return (
    <ul className="handlers">
      <li className="handlers__handler">
        <Link
          to={{
            pathname: '/compose/tweet',
            state: {
              background: location,
              tweet,
              scrollY: document.body.style.top
            }
          }}
        >
          <div className="handlers__button handlers__button--comment">
            <FontAwesomeIcon
              icon={faComment}
              className="handlers__icon handlers__icon--comment"
            />
          </div>
          {counts && (
            <span className="handlers__count">{tweet.replies_count}</span>
          )}
        </Link>
      </li>
      <li className="handlers__handler">
        <div className="handlers__button handlers__button--retweet">
          <FontAwesomeIcon icon={faRetweet} />
        </div>
        {counts && (
          <span className="handlers__count">{tweet.retweets_count}</span>
        )}
      </li>
      <li className="handlers__handler" onClick={() => likeTweet(tweet)}>
        <div
          className="handlers__button handlers__button--likes"
          onClick={() => likeTweet(tweet)}
        >
          <FontAwesomeIcon
            color={tweet.liked_tweet === 1 ? 'red' : 'inherit'}
            icon={tweet.liked_tweet === 1 ? faHeartFull : faHeart}
          />
        </div>
        {counts && <span className="handlers__count">{tweet.likes_count}</span>}
      </li>
    </ul>
  );
};

TweetHandler.propTypes = {
  counts: PropTypes.bool.isRequired,
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    replies_count: PropTypes.number.isRequired,
    tweet: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    retweets_count: PropTypes.number.isRequired,
    liked_tweet: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profile_photo: PropTypes.string.isRequired
    }).isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired
};

export default TweetHandler;
