import React, { useEffect } from 'react';
import { fetchReplies } from '../state/ducks/replies';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchComments } from '../utils/useFetchComment';

import CommentList from '../components/Comment/CommentList';
import CommentHeader from '../components/Comment/CommentHeader';

const Comment = ({ background }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { parent_tweets } = useSelector(state => state.replies);
  const { tweet, name } = useParams();
  let from = location.state && location.state.from;

  useEffect(() => {
    if (
      !background &&
      (from !== `/${name}/status/${tweet}/likes` || parent_tweets.length === 0)
    ) {
      dispatch(fetchReplies(`/api/tweet/${tweet}/reply`, 'GET', 'READ'));
      window.scrollTo(0, 0);
    }
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
