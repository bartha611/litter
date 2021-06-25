import React from 'react';

const Notification = ({ type, data, read_at }) => {
  const getTitle = (type, name) => {
    if (type === 'App\\Notifications\\createComment') {
      return `Recent reply from ${name}`;
    } else {
      return `Recent like from ${name}`;
    }
  };

  return (
    <div
      className={`notification ${!read_at ? `notification--highlight` : ``}`}
    >
      <div className="notification__header">
        <img
          className="notification__photo"
          src={data.photo}
          alt="User profile photo"
        />
        <div className="notification__title">{getTitle(type, data.name)}</div>
      </div>
      <div className="notification__body">{data.tweet}</div>
    </div>
  );
};

export default Notification;
