import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Tweet from './Tweet';
import TweetButton from './TweetButton';
import PropTypes from 'prop-types';

/**
 * Creates a tweet compose modal
 */

const TweetCompose = ({ tweet = null }) => {
  const history = useHistory();
  const location = useLocation();
  let tweetId = location.state && location.state.tweet.id;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const back = e => {
    e.stopPropagation();
    console.log(e.target.className);
    if (!e.target.className) {
      history.push({
        pathname: '/',
        state: {
          from: location.pathname
        }
      });
    }
  };

  return (
    <div
      onClick={back}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div
        className="modalButton"
        style={{
          background: 'black',
          width: '400px',
          margin: '0 auto',
          color: 'white',
          marginTop: '150px'
        }}
      >
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
