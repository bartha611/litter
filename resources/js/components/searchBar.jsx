import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../state/ducks/search';
import { useHistory, useLocation } from 'react-router-dom';

const SearchBar = ({ type }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setSearch('');
  }, [location]);

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.search);

  const submit = event => {
    setSearch(event.target.value);
    if (event.target.value.length > 0) {
      dispatch(fetchUsers(event.target.value));
    }
  };
  const isFollower = user => {
    if (user.follower_user === '1') {
      return <span className="search__check">&#10004;</span>;
    } else {
      return '';
    }
  };
  return (
    <div className={`search search__${type}`}>
      <FontAwesomeIcon className="search__icon" icon={faSearch} />
      <input
        type="text"
        className="search__input"
        onChange={e => submit(e)}
        placeholder="Search..."
        value={search}
      />
      <div className="search__menu">
        {search.length > 0 &&
          users.map(user => {
            return (
              <div
                className="search__item border-bottom-0"
                key={user.id}
                onClick={() => history.push(`/${user.username}`)}
              >
                <div className="search__photo">
                  <img
                    src={user.profile_photo}
                    alt="User Profile Photo"
                    className="search__image"
                  />
                </div>
                <div className="search__body">
                  <div className="search__name">
                    {user.name}
                    {isFollower(user)}
                  </div>
                  <div className="search__username">@{user.username}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
