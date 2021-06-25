import React from 'react';
import { useSelector } from 'react-redux';
import Notification from './Notification';

const NotificationList = () => {
  const { loading, notifications } = useSelector(
    (state) => state.notifications
  );

  return (
    <div className="notification__list">
      {!loading &&
        notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              data={notification.data}
              type={notification.type}
            />
          );
        })}
    </div>
  );
};

export default NotificationList;
