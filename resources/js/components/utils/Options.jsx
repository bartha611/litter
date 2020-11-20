import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faHeart as faHeart1 } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { fetchTweets } from '../../state/ducks/tweets';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Options = ({ tweet }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const likeTweet = ({ liked_tweet, id }) => {
    const method = liked_tweet > 0 ? 'DELETE' : 'POST';
    const operation = liked_tweet > 0 ? 'UNLIKE' : 'LIKE';
    dispatch(fetchTweets(`/api/tweet/${id}/likes`, method, operation));
  };

  return (
    <div className=" justify-content-around d-flex">
      <div className="option">
        <Link
          className="option__image option__comment"
          to={{
            pathname: '/compose/tweet',
            state: { background: location, tweet }
          }}
        >
          <FontAwesomeIcon className="option__icon" icon={faComment} />
        </Link>
        <div className="option__count">
          <span>{tweet.replies_count}</span>
        </div>
      </div>
      <div className="option">
        <div
          className="option__image option__like"
          onClick={() => likeTweet(tweet)}
        >
          <FontAwesomeIcon
            color={tweet.liked_tweet === 0 ? 'black' : 'red'}
            className="option__icon"
            icon={tweet.liked_tweet === 0 ? faHeart : faHeart1}
          />
        </div>
        <div className="option__count">
          <span>{tweet.likes_count}</span>
        </div>
      </div>
    </div>
  );
};

Options.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    replies_count: PropTypes.number.isRequired,
    tweet: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    liked_tweet: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profile_photo: PropTypes.string.isRequired
    }).isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired
};

export default Options;
