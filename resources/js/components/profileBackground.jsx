import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from './Profile/Header';

const Background = () => {
  const { user } = useSelector(state => state.tweets);
  return (
    <div className="profile">
      {user && (
        <div>
          <Header user={user} />
          <div className="profile__background">
            <div className="profile__backgroundImage"></div>
            <img
              className="profile__image"
              src={user.profile_photo}
              alt="User profile photo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Background;
