import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../state/ducks/user';
import UserList from '../components/User/UserList';
import { useDispatch } from 'react-redux';

/**
 * Component that renders a user list for modal
 *
 * @param {string} type - Type
 */

const TweetUserView = ({ type }) => {
  const dispatch = useDispatch();
  const { tweet } = useParams();

  useEffect(() => {
    if (type === 'likes') {
      dispatch(fetchUsers(`/api/tweet/${tweet}/likes`, 'GET', 'READ'));
    } else {
      dispatch(fetchUsers(`/api/tweet/${tweet}/retweets`, 'GET', 'READ'));
    }
  }, []);

  return <UserList />;
};

TweetUserView.propTypes = {
  type: PropTypes.string.isRequired
};

export default TweetUserView;
