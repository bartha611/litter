import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faEnvelope,
  faUser
} from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar position-fixed">
      <ul className="sidebar__nav">
        <li className="sidebar__item">
          <button className="sidebar__button-active">
            <FontAwesomeIcon icon={faHouseUser} />
            <span className="sidebar__title">Home</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <FontAwesomeIcon icon={faBell} />
            <span className="sidebar__title">Notifications</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="sidebar__title">Messages</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <FontAwesomeIcon icon={faUser} />
            <span className="sidebar__title">Profile</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
