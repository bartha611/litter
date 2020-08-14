import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faEnvelope,
  faUser
} from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const history = useHistory();
  const { user } = useSelector(state => state.auth);
  return (
    <div className="sidebar">
      <ul className="sidebar__nav">
        <li className="sidebar__item">
          <button
            className="sidebar__button-active"
            onClick={() => history.push('/')}
          >
            <FontAwesomeIcon icon={faHouseUser} />
            <span className="sidebar__title">Home</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push('/search')}
          >
            <FontAwesomeIcon icon={faSearch} />
            <span className="sidebar__title">Search</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push('/notifications')}
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="sidebar__title">Notifications</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push('/messages')}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="sidebar__title">Messages</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push(`/${user.name}`)}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="sidebar__title">Profile</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
