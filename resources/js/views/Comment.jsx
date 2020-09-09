import React, { useEffect, lazy } from 'react';
import * as actions from '../state/ducks/comments';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetchComments } from '../utils/useFetchComment';

const CommentList = lazy(() =>
  import(
    /* webpackChunkName: 'CommentList' */ '../components/Comment/CommentList'
  )
);

const CommentHeader = lazy(() =>
  import(
    /* webpackChunkName: 'CommentHeader' */ '../components/Comment/CommentHeader'
  )
);

const Comment = () => {
  const dispatch = useDispatch();
  const { tweet } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(actions.requestComment(`api/tweet/${tweet}/reply`, 'READ', 'GET'));
  }, []);

  useFetchComments(`/api/tweet/${tweet}/comment`);

  return (
    <div>
      <CommentHeader />
      <CommentList />
    </div>
  );
};

export default Comment;
