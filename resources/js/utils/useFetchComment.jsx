import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestComment } from '../state/ducks/comments/actions';

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
        requestComment(`${url}?cursor=${comment.cursor}`, 'GET', 'PAGINATE')
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};
