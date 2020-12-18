import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../state/ducks/tweets';
import { useParams, useLocation } from 'react-router-dom';
import TweetList from '../components/Tweet/TweetList';
import Background from '../components/Profile/ProfileBackground';
import About from '../components/Profile/Biography';

import { useFetchTweets } from '../utils/useFetchTweet';

const Profile = ({ background }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { tweets } = useSelector(state => state.tweets);
  let { name } = useParams();
  let from = location.state && location.state.from;

  useEffect(() => {
    if (!background && (from !== '/compose/tweet' || tweets.length === 0)) {
      dispatch(fetchTweets(`/api/user/${name}/tweet`, 'GET', 'READ'));
      window.scrollTo(0, 0);
    }
  }, []);

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
