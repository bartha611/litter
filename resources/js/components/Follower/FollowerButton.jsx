import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFollowers } from '../../state/ducks/followers';

/**
 *
 * @param {object} props - Component props
 * @param {object} props.follower - Follower object
 * @param {Number} props.follower.followed_user - Number either 0 or 1 that determines whether user follows follower
 * @param {object} props.follower.follower_user - user information about follower
 * @param {Number} props.follower.follower_user.id - User id of follower
 * @param {String} props.follower.follower_user.name - Name of follower
 * @param {String} props.follower.follower_user.profile_photo - Profile photo of follower
 * @param {String} props.follower.follower_user.biography - Biography of follower
 *
 */

const FollowButton = ({ follower }) => {
  const dispatch = useDispatch();

  const submit = follower => {
    if (follower.followed_user === 1) {
      dispatch(
        fetchFollowers(
          `/api/user/${follower.follower_user.id}/following`,
          'DELETE',
          'DELETE'
        )
      );
    } else {
      dispatch(
        fetchFollowers(
          `/api/user/${follower.followed_user.id}/follower`,
          'POST',
          'POST'
        )
      );
    }
  };

  return (
    <div>
      {follower.followed_user === 1 ? (
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
    followed_user: PropTypes.bool.isRequired,
    follower_user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_photo: PropTypes.string,
      biography: PropTypes.string
    })
  }).isRequired
};

export default FollowButton;
