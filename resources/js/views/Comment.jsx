import React, { useEffect } from 'react';
import { fetchReplies } from '../state/ducks/replies';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchComments } from '../utils/useFetchComment';

import CommentList from '../components/Comment/CommentList';
import CommentHeader from '../components/Comment/CommentHeader';

const Comment = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { tweet } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchReplies(`/api/tweet/${tweet}/reply`, 'GET', 'READ'));
  }, [location]);

  useFetchComments(`/api/tweet/${tweet}/comment`);

  return (
    <div>
      <CommentHeader />
      <CommentList />
    </div>
  );
};

export default Comment;
