import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import UserList from '../components/User/UserList';
import { fetchUsers } from '../state/ducks/user/userThunk';
import { useFetchFollowers } from '../utils/useFetchFollower';

const FollowerView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const arr = location.pathname.split('/');
  const type = arr[arr.length - 1];
  let { name } = useParams();

  useEffect(() => {
    dispatch(fetchUsers(`/api/user/${name}/${type}`, 'GET', 'READ'));
  }, []);

  useFetchFollowers(name, type);

  return <UserList />;
};

export default FollowerView;
