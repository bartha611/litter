import React, { useEffect } from 'react';
import { fetchNotification } from '../state/ducks/notifications';
import { useDispatch } from 'react-redux';
import NotificationList from '../components/Notification/NotificationList';

const NavigationView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotification('/api/notification'));
  }, []);
  return (
    <div>
      <NotificationList />
    </div>
  );
};

export default NavigationView;
