import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReplies } from '../state/ducks/replies';

export const useFetchComments = (path, name = null) => {
  const comment = useSelector(state => state.comments);
  const dispatch = useDispatch();
  const url = path + (name ? `/${name}` : '');

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !comment.cursor ||
        comment.loading
      )
        return;
      dispatch(
        fetchReplies(`${url}?cursor=${comment.cursor}`, 'GET', 'PAGINATION')
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
