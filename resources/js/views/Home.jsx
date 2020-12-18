import React, { useEffect, lazy } from 'react';
import { fetchTweets } from '../../js/state/ducks/tweets';
import { useDispatch, useSelector } from 'react-redux';
import TweetButton from '../components/Tweet/TweetButton';
import TweetList from '../components/Tweet/TweetList';

import { useFetchTweets } from '../utils/useFetchTweet';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ background }) => {
  const dispatch = useDispatch();
  const tweets = useSelector(state => state.tweets.tweets);
  const location = useLocation();
  let from = location.state && location.state.from;

  useEffect(() => {
    if (!background && (from !== '/compose/tweet' || tweets.length === 0)) {
      dispatch(fetchTweets('/api/tweet', 'GET', 'READ'));
      window.scrollTo(0, 0);
    }
  }, []);

  useFetchTweets();

  return (
    <div>
      <TweetButton />
      <TweetList />
    </div>
  );
};

Home.propTypes = {
  background: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.shape({
      from: PropTypes.string
    })
  }).isRequired
};

export default Home;
