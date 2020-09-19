import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../state/ducks/tweets';
import { fetchReplies } from '../../state/ducks/replies';

const TweetButton = ({ tweetId = null }) => {
  const [tweet, setTweet] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const submit = () => {
    if (tweetId) {
      dispatch(
        fetchReplies(`/api/tweet/${tweetId}/reply`, 'POST', 'POST', { tweet })
      );
    } else {
      dispatch(fetchTweets('/api/tweet', 'POST', 'POST', { tweet }));
    }
  };

  return (
    <div className="button">
      <div className="button__info">
        <img
          className="button__image"
          src={user.profile_photo}
          alt="User profile photo"
        />
      </div>
      <div className="button__body">
        <div
          contentEditable
          placeholder="What is on your mind?"
          className="button__message"
          onInput={e => setTweet(e.target.innerText)}
        ></div>
        <div className="button__helpers">
          <button
            className="button__submit btn-primary"
            onClick={() => submit()}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

TweetButton.propTypes = {
  tweetId: PropTypes.string
};

export default TweetButton;
