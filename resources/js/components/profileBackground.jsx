import React from 'react';
import { useSelector } from 'react-redux';

const Background = () => {
  const { user } = useSelector(state => state.tweets);
  return (
    <div className="profile">
      {user && (
        <div>
          <div className="profile__title">
            <div className="profile__name text-bold">{user.name}</div>
            <div className="text-muted profile__tweetTotal">
              {user.tweets_count} tweets
            </div>
          </div>
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
