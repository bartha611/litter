import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tweetRequest } from '../state/ducks/tweets/actions';

export const useFetchTweets = (path, name = null) => {
  const tweet = useSelector(state => state.tweets);
  const dispatch = useDispatch();
  const url = path + (name ? `/${name}` : '');

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !tweet.cursor
      )
        return;
      dispatch(
        tweetRequest(`${url}?cursor=${tweet.cursor}`, 'GET', 'PAGINATE')
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
