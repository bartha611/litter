import * as actions from './replySlice';
export const fetchReplies = url => async dispatch => {
  try {
    dispatch(actions.loadReply());
  } catch (err) {
    dispatch(actions.errorReply());
  }
};
