import React from 'react';
import User from './User';
import { useSelector } from 'react-redux';

const UserList = () => {
  const { users } = useSelector(state => state.user);

  return (
    <div className="users">
      {users.map(user => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;
