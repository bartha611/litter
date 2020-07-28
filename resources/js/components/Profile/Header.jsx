import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header__name">{user.name}</div>
      {user.tweets_count ? (
        <div className="header__tweets_count text-muted">
          {user.tweets_count} Tweets
        </div>
      ) : (
        <div className="header__username text-muted">@{user.name}</div>
      )}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tweets_count: PropTypes.number
  })
};

export default Header;
