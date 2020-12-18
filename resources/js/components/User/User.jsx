import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { split } from 'lodash';
import { fetchUsers } from '../../state/ducks/user/userThunk';

/**
 * User component that provides User information in addition to a Following Button
 *
 * @param {Object} props - Component props
 * @param {Object} props.user - User object
 * @param {number} props.user.id - Id of user
 * @param {string} props.user.name - Name of user
 * @param {string} props.user.username - Username of user
 * @param {string} props.user.profile_photo - Profile photo user
 * @param {string|null} props.user.biography - Biography of user.  Null if user has no biography
 * @param {number|null} props.user.followed_user - Following id if logged-in user follows person otherwise null
 */

const User = ({ user }) => {
  const { user: AuthUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = ({ followed_user, username }) => {
    if (followed_user > 0) {
      dispatch(
        fetchUsers(
          `/api/follower/${followed_user}`,
          'DELETE',
          'DELETE_FOLLOWER'
        )
      );
    } else {
      dispatch(
        fetchUsers(`/api/user/${username}/follower`, 'POST', 'CREATE_FOLLOWER')
      );
    }
  };

  const _onClick = e => {
    if (split(e.target.className, ' ')[0] !== 'follower__button') {
      history.push(`/${user.username}`);
    }
  };

  return (
    <div className="user" key={user.id} onClick={e => _onClick(e)}>
      <div className="user__image">
        <img
          src={user.profile_photo}
          alt="User Profile Photo"
          className="user__photo"
        />
      </div>
      <div className="user__body">
        <div className="user__info">
          <div className="user__user">
            <div className="user__name">{user.name}</div>
            <div className="user__username">{user.username}</div>
          </div>
          {user.id !== AuthUser.id && (
            <button
              onClick={() => submit(user)}
              className={`follower__button follower__button--${
                user.followed_user === null ? 'follow' : 'unfollow'
              }`}
            ></button>
          )}
        </div>
        <div className="user__biography">{user.biography}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profile_photo: PropTypes.string.isRequired,
    biography: PropTypes.string,
    followed_user: PropTypes.number
  })
};

export default User;
