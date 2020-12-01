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
    <div>
      <ul className="sidebar__nav">
        <li className="sidebar__item">
          <button className="sidebar__button" onClick={() => history.push('/')}>
            <FontAwesomeIcon color="white" icon={faHouseUser} />
          </button>
          <span className="sidebar__title">Home</span>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push('/search')}
          >
            <FontAwesomeIcon color="white" icon={faSearch} />
          </button>
          <span className="sidebar__title">Search</span>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push('/notifications')}
          >
            <FontAwesomeIcon color="white" icon={faBell} />
          </button>
          <span className="sidebar__title">Notifications</span>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push('/messages')}
          >
            <FontAwesomeIcon color="white" icon={faEnvelope} />
          </button>
          <span className="sidebar__title">Messages</span>
        </li>
        <li className="sidebar__item">
          <button
            className="sidebar__button"
            onClick={() => history.push(`/${user.username}`)}
          >
            <FontAwesomeIcon color="white" icon={faUser} />
          </button>
          <span className="sidebar__title">Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
