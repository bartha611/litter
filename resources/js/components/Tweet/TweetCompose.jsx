import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Tweet from './Tweet';
import TweetButton from './TweetButton';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Creates a tweet compose modal
 *
 * @param {Object} props - The props of the component
 * @param {Object|null} props.tweet - Tweet id of
 * @param {function} setCancel - UseState hook inherited from modal that cancels modal
 */

const TweetCompose = ({ tweet = null, setCancel }) => {
  const location = useLocation();
  let tweetId = location.state && location.state.tweet.id;

  return (
    <div className="TweetCompose">
      {tweet && <Tweet tweet={tweet} line={true} disabled={true} />}
      <TweetButton tweetId={tweetId} setCancel={setCancel} />
    </div>
  );
};

TweetCompose.propTypes = {
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
  }),
  setCancel: PropTypes.func.isRequired
};

export default TweetCompose;
