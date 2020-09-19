import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFollowers } from '../../state/ducks/followers';

const FollowButton = ({ follower }) => {
  const dispatch = useDispatch();
  const submit = follower => {
    if (follower.followed) {
      dispatch(
        fetchFollowers(`/api/follower/${follower.id}`, 'DELETE', 'DELETE')
      );
    } else {
      dispatch(
        fetchFollowers('/api/follower', 'POST', 'POST', {
          follower_id: follower.follower_id
        })
      );
    }
  };
  return (
    <div>
      {follower.followed === true ? (
        <button
          className="following__button following__button--unfollow"
          onClick={() => submit(follower)}
        ></button>
      ) : (
        <button
          className="following__button following__button--follow"
          onClick={() => submit(follower)}
        ></button>
      )}
    </div>
  );
};

FollowButton.propTypes = {
  follower: PropTypes.shape({
    id: PropTypes.number.isRequired,
    follower_id: PropTypes.string.isRequired,
    followed: PropTypes.bool.isRequired,
    followed_user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_photo: PropTypes.string,
      email: PropTypes.string.isRequired,
      biography: PropTypes.string,
      created_at: PropTypes.string
    })
  }).isRequired
};

export default FollowButton;
