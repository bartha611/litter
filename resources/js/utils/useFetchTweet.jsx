import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../state/ducks/tweets';

export const useFetchTweets = (path, name = null) => {
  const tweet = useSelector(state => state.tweets);
  const dispatch = useDispatch();
  const url = path + (name ? `/${name}` : '');

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !tweet.cursor ||
        tweet.loading
      )
        return;
      dispatch(fetchTweets(`${url}?cursor=${tweet.cursor}`, 'GET', 'PAGINATE'));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
