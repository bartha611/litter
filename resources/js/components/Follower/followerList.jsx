import React from 'react';
import { useSelector } from 'react-redux';
import FollowButton from './FollowerButton';
import Follower from './Follower';

const FollowerList = () => {
  const { following } = useSelector(state => state.followers);
  return (
    <div>
      {following.map(follower => {
        return <Follower key={follower.id} follower={follower} />;
      })}
    </div>
  );
};

export default FollowerList;
