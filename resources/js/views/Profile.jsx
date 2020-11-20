import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../state/ducks/tweets';
import { useParams, useLocation } from 'react-router-dom';
import TweetList from '../components/Tweet/TweetList';
import Background from '../components/Profile/ProfileBackground';
import About from '../components/Profile/Biography';

import { useFetchTweets } from '../utils/useFetchTweet';

const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  let { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchTweets(`/api/user/${name}/tweet`, 'GET', 'READ'));
  }, [location]);

  useFetchTweets(name);

  return (
    <div>
      <Background />
      <About />
      <TweetList />
    </div>
  );
};

export default Profile;
