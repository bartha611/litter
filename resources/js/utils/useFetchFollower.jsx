import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../state/ducks/user/userThunk';

export const useFetchFollowers = (name, type) => {
  const { cursor } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const url = `/api/user/${name}/${type}`;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !cursor
      )
        return;
      dispatch(
        fetchUsers(`${url}?cursor=${followers.cursor}`, 'GET', 'PAGINATE')
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
