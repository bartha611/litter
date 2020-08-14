import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';

const About = () => {
  const { user } = useSelector(state => state.tweets);
  const history = useHistory();
  const formatDate = date => {
    const options = { month: 'long', year: 'numeric' };
    return ` Joined ${new Date(date).toLocaleDateString(undefined, options)}`;
  };

  return (
    <div className="about border-left border-right border-bottom">
      {user && (
        <div className="about__info">
          <div className="about__name text-bold">{user.name}</div>
          <div className="about__username text-muted">@{user.username}</div>
          <div className="about__joinedDate text-muted">
            <FontAwesomeIcon icon={faCalendar} />
            {formatDate(user.created_at)}
          </div>
          <div className="about__following">
            <div
              onClick={() => history.push(`${user.name}/following`)}
              className="about__following"
            >
              <b>{user.followers_count} </b>
              <span className="text-muted">Followers</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
