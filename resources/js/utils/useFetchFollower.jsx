import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowers } from '../state/ducks/followers/';

export const useFetchFollowers = name => {
  const followers = useSelector(state => state.followers);
  const dispatch = useDispatch();
  const url = `/api/user/${name}/following`;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !followers.cursor
      )
        return;
      dispatch(
        fetchFollowers(`${url}?cursor=${followers.cursor}`, 'GET', 'PAGINATE')
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
