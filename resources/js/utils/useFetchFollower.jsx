import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followerRequest } from '../state/ducks/followers/actions';

export const useFetchFollowers = (path, name = null) => {
  const followers = useSelector(state => state.followers);
  const dispatch = useDispatch();
  const url = path + (name ? `/${name}` : '');

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !followers.cursor
      )
        return;
      dispatch(
        followerRequest(`${url}?cursor=${followers.cursor}`, 'GET', 'PAGINATE')
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
