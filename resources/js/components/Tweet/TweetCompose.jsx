import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Tweet from './Tweet';
import TweetButton from './TweetButton';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Creates a tweet compose modal
 */

const TweetCompose = ({ tweet = null }) => {
  const history = useHistory();
  const location = useLocation();
  let tweetId = location.state && location.state.tweet.id;
  const lastLocation = location.state && location.state.background.pathname;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const back = e => {
    e.stopPropagation();
    console.log(e.target.className);
    if (e.target.className === 'TweetCompose') {
      history.push({
        pathname: `${lastLocation}`,
        state: {
          from: location.pathname
        }
      });
    }
  };

  const _onClick = e => {
    history.push({
      pathname: `${lastLocation}`,
      state: {
        from: location.pathname
      }
    });
  };

  return (
    <div onClick={back} className="TweetCompose">
      <div className="TweetCompose__modal">
        <div className="TweetCompose__header">
          <span className="TweetCompose__close">
            <FontAwesomeIcon
              onClick={_onClick}
              color="inherit"
              icon={faTimes}
              size="lg"
              className="TweetCompose__icon"
            />
          </span>
        </div>
        {tweet && (
          <Tweet
            tweet={tweet}
            options={false}
            parent={false}
            line={true}
            disabled={true}
          />
        )}
        <TweetButton tweetId={tweetId} />
      </div>
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
  }).isRequired
};

export default TweetCompose;
