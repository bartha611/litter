import api from '../../utils/api';
import * as actions from './tweetSlice';

const populateData = results => {
  return {
    READ: actions.readTweet(results),
    PAGINATE: actions.paginateTweet(results),
    CREATE: actions.createTweet(results),
    DELETE: actions.deleteTweet(results),
    LIKE: actions.likeTweet(results),
    UNLIKE: actions.unlikeTweet(results),
    ERROR: actions.errorTweet(results)
  };
};

export const fetchTweets = (
  url,
  method,
  operation,
  data = null
) => async dispatch => {
  dispatch(actions.loadTweet());
  try {
    const response = await api({ url, method, data });
    dispatch(populateData(response.data)[operation]);
  } catch (err) {
    dispatch(actions.errorTweet());
  }
};
