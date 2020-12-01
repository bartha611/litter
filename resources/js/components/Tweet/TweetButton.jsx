import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../state/ducks/tweets';
import { fetchReplies } from '../../state/ducks/replies';
import { useHistory, useLocation } from 'react-router-dom';

const TweetButton = ({ tweetId = null }) => {
  const history = useHistory();
  const location = useLocation();
  const [tweet, setTweet] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const submit = () => {
    if (tweetId) {
      dispatch(
        fetchReplies(
          `/api/tweet/${tweetId}/reply`,
          'POST',
          'CREATE',
          { tweet },
          history,
          location
        )
      );
    } else {
      dispatch(fetchTweets('/api/tweet', 'POST', 'CREATE', { tweet }));
    }
    setTweet('');
  };

  return (
    <div className="tweetButton">
      <div className="tweetButton__info">
        <img
          className="tweetButton__image"
          src={user.profile_photo}
          alt="User profile photo"
        />
      </div>
      <div className="tweetButton__body">
        <TextareaAutosize
          placeholder="What is on your mind?"
          className="tweetButton__message"
          value={tweet}
          onChange={e => setTweet(e.target.value)}
        ></TextareaAutosize>
        <div className="tweetButton__helpers">
          <button
            className="tweetButton__submit"
            disabled={tweet.length > 0 ? false : true}
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
  tweetId: PropTypes.number
};

export default TweetButton;
