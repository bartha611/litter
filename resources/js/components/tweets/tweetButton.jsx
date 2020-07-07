import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TweetButton = ({ user, setTweet, submit }) => {
  return (
    <div className="button border">
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
  setTweet: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    profile_photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default TweetButton;
