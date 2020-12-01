import React, { useEffect, lazy } from 'react';
import { fetchFollowers } from '../state/ducks/followers';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';
import { useFetchFollowers } from '../utils/useFetchFollower';

const FollowerList = lazy(() =>
  import(
    /* webpackChunkName: 'FollowList' */ '../components/Follower/followerList'
  )
);

const Follower = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { error } = useSelector(state => state.followers);

  useEffect(() => {
    dispatch(fetchFollowers(`/api/user/${name}/following`, 'GET', 'READ'));
  }, []);

  useFetchFollowers(name);
  return (
    <div>
      <FollowerList />
      {error && <Alert color="danger">Error in retrieving followers</Alert>}
    </div>
  );
};

export default Follower;
