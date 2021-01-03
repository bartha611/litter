import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Header from './Header';

const Background = () => {
  const history = useHistory();
  const location = useLocation();
  const { user } = useSelector(state => state.tweets);
  const { user: authUser } = useSelector(state => state.auth);

  return (
    <div className="profile">
      {user && (
        <div>
          <Header user={user} />
          <div className="profile__background">
            <div
              key={Date.now()}
              className="profile__backgroundImage"
              style={{ backgroundImage: `url('${user.background_image}')` }}
            ></div>
            <img
              key={user.profile_photo}
              className="profile__image"
              src={user.profile_photo}
              alt="User profile photo"
            />
          </div>
          <div className="profile__edit">
            {authUser.id === user.id && (
              <button
                className="profile__button"
                onClick={() =>
                  history.push(`/settings/profile`, { background: location })
                }
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Background;
