import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faHeart as faHeart1 } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Tweet from '../tweets/Tweet';
import TweetButton from '../tweets/tweetButton';

const Options = ({ tweet }) => {
  const [commentModal, setCommentModal] = useState(false);

  const toggleComment = () => setCommentModal(!commentModal);

  return (
    <div className=" justify-content-around d-flex">
      <div className="option">
        <div className="option__image option__comment">
          <FontAwesomeIcon
            className="option__icon"
            icon={faComment}
            onClick={toggleComment}
          />
          <Modal
            isOpen={commentModal}
            toggle={toggleComment}
            className="commentModal"
          >
            <ModalHeader toggle={toggleComment}>Create Comment</ModalHeader>
            <ModalBody>
              <Tweet tweet={tweet} disabled={true} options={false} />
              <TweetButton tweetId={tweet.id}></TweetButton>
            </ModalBody>
          </Modal>
        </div>
        <div className="option__count">
          <span>{tweet.comment_count}</span>
        </div>
      </div>
      <div className="option">
        <div className="option__image option__like">
          <FontAwesomeIcon
            color={tweet.liked_tweet === '0' ? 'black' : 'red'}
            className="option__icon"
            icon={tweet.liked_tweet === '0' ? faHeart : faHeart1}
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
    id: PropTypes.string.isRequired,
    comment_count: PropTypes.string.isRequired,
    likes_count: PropTypes.string.isRequired,
    liked_tweet: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
    profile_photo: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired
};

export default Options;
