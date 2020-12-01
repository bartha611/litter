import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchFollowers } from '../../state/ducks/followers/followerThunk';

/**
 * Follower Component
 * @param {object} props Component props
 * @param {Object} props.follower - The Follower object
 * @param {string} props.follower.id - Follower id
 * @param {number} props.follower.followed_user - Boolean that determines whether current user follows the following user
 * @param {Object} props.follower.following_user - The followed user
 * @param {String} props.follower.following_user.id = The id of the following user
 * @param {string} props.follower.following_user.name - The name of the following user
 * @param {string} props.follower.following_user.username - The username of the following user
 * @param {string} props.follower.following_user.profile_photo - The profile photo of the following user
 * @param {string} props.follower.following_user.biography - The biography of the following user
 */

const Follower = ({ follower }) => {
  const dispatch = useDispatch();

  const submit = (followed_user, id) => {
    if (followed_user === 1) {
      dispatch(fetchFollowers(`/api/user/${id}/following`, 'DELETE', 'DELETE'));
    } else {
      dispatch(fetchFollowers(`/api/user/${id}/follower`, 'POST', 'POST'));
    }
  };

  return (
    <div
      id={follower.id}
      key={follower.id}
      className="follower flex flex-row border-left border-right border-bottom"
    >
      <div className="follower__image">
        <img
          src={follower.following_user.profile_photo}
          alt="follower profile photo"
          className="follower__photo"
        />
      </div>
      <div className="follower__body">
        <div className="follower__info flex justify-content-between">
          <div className="follower__user">
            <div className="follower__name">{follower.following_user.name}</div>
            <div className="follower__username text-muted">
              @{follower.following_user.username}
            </div>
          </div>
          <button
            onClick={() =>
              submit(follower.followed_user, follower.following_user.id)
            }
            className={`follower__button follower__button--${
              follower.followed_user === 0 ? `follow` : 'unfollow'
            }`}
          ></button>
        </div>
        <div className="follower__biography">
          {follower.following_user.biography}
        </div>
      </div>
    </div>
  );
};

Follower.propTypes = {
  follower: PropTypes.shape({
    id: PropTypes.number.isRequired,
    followed_user: PropTypes.number.isRequired,
    following_user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profile_photo: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Follower;
