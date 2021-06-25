import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faEnvelope,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const { notifications } = useSelector((state) => state.notifications);

  const totalUnreadNotifications = (notifications) => {
    let total = 0;
    for (const note of notifications) {
      if (!note.read_at) {
        total += 1;
      }
    }
    return total;
  };

  return (
    <div>
      <ul className="sidebar__nav">
        <li className="sidebar__item" onClick={() => history.push('/')}>
          <div className="sidebar__button">
            <FontAwesomeIcon color="white" icon={faHouseUser} />
          </div>
          <span className="sidebar__title">Home</span>
        </li>
        <li className="sidebar__item" onClick={() => history.push('/search')}>
          <div className="sidebar__button">
            <FontAwesomeIcon color="white" icon={faSearch} />
          </div>
          <span className="sidebar__title">Search</span>
        </li>
        <li
          className="sidebar__item"
          onClick={() => history.push('/notifications')}
        >
          {totalUnreadNotifications(notifications) > 0 && (
            <div className="sidebar__notification">
              {totalUnreadNotifications(notifications)}
            </div>
          )}
          <div className="sidebar__button">
            <FontAwesomeIcon color="white" icon={faBell} />
          </div>
          <span className="sidebar__title">Notifications</span>
        </li>
        <li className="sidebar__item" onClick={() => history.push('/messages')}>
          <div className="sidebar__button">
            <FontAwesomeIcon color="white" icon={faEnvelope} />
          </div>
          <span className="sidebar__title">Messages</span>
        </li>
        <li
          className="sidebar__item"
          onClick={() => history.push(`/${user.username}`)}
        >
          <div className="sidebar__button">
            <FontAwesomeIcon color="white" icon={faUser} />
          </div>
          <span className="sidebar__title">Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
