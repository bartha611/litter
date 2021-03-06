import * as actions from './replySlice';
import api from '../../utils/api';

const populateData = results => {
  return {
    READ: actions.readReply(results),
    PAGINATE: actions.paginateReply(results),
    CREATE: actions.createReply(results),
    DELETE: actions.deleteReply(results)
  };
};

export const fetchReplies = (
  url,
  method,
  operation,
  data = null
) => async dispatch => {
  dispatch(actions.loadReply());
  try {
    const response = await api({
      url,
      method,
      data
    });
    dispatch(populateData(response.data)[operation]);
  } catch (err) {
    dispatch(actions.errorReply());
  }
};
