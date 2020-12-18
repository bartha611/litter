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

  const formatCounts = count => {
    if (count < 1000) {
      return count;
    } else if (count < 1000000) {
      return `${_.round(count / 1000, 1)}K `;
    } else {
      return `${_.round(count / 1000000)}M `;
    }
  };

  return (
    <div className="about">
      {user && (
        <div className="about__info">
          <div className="about__name">{user.name}</div>
          <div className="about__username">@{user.username}</div>
          <div className="about__biography">{user.biography}</div>
          <div className="about__joinedDate text-muted">
            <FontAwesomeIcon icon={faCalendar} />
            {formatDate(user.created_at)}
          </div>
          <div className="about__followerCounts">
            <div
              onClick={() => history.push(`${user.username}/following`)}
              className="about__following"
            >
              <span className="about__counts">
                {formatCounts(user.following_count)}{' '}
              </span>
              Following
            </div>
            <div
              className="about__followers"
              onClick={() => history.push(`${user.username}/followers`)}
            >
              <span className="about__counts">
                {formatCounts(user.followers_count)}{' '}
              </span>
              Followers
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
