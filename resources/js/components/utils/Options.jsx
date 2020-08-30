import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faHeart as faHeart1 } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const Options = ({ comment_count, likes_count, liked_tweet }) => {
  return (
    <div className=" justify-content-around d-flex">
      <div className="option">
        <div className="option__image option__comment">
          <FontAwesomeIcon className="option__icon" icon={faComment} />
        </div>
        <div className="option__count">
          <span>{comment_count}</span>
        </div>
      </div>
      <div className="option">
        <div className="option__image option__like">
          <FontAwesomeIcon
            color={liked_tweet === '0' ? 'black' : 'red'}
            className="option__icon"
            icon={liked_tweet === '0' ? faHeart : faHeart1}
          />
        </div>
        <div className="option__count">
          <span>{likes_count}</span>
        </div>
      </div>
    </div>
  );
};

Options.propTypes = {
  comment_count: PropTypes.number.isRequired,
  likes_count: PropTypes.number.isRequired,
  liked_tweet: PropTypes.number.isRequired
};

export default Options;
