import React from 'react';
import { useSelector } from 'react-redux';
import FollowButton from './FollowerButton';

const FollowerList = () => {
  const { followers, user } = useSelector(state => state.followers);
  return (
    <div>
      {followers.map(follower => {
        return (
          <div
            id={follower.id}
            key={follower.id}
            className="follower flex flex-row border-left border-right border-bottom"
          >
            <div className="follower__image">
              <img
                src={follower.followed_user.profile_photo}
                alt="follower profile photo"
                className="follower__photo"
              />
            </div>
            <div className="follower__body">
              <div className="follower__info flex justify-content-between">
                <div className="follower__user">
                  <div className="follower__name">
                    {follower.followed_user.name}
                  </div>
                  <div className="follower__username text-muted">
                    @{follower.followed_user.username}
                  </div>
                </div>
                <div>{user && <FollowButton follower={follower} />}</div>
              </div>
              <div className="follower__biography">
                {follower.followed_user.biography}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerList;
