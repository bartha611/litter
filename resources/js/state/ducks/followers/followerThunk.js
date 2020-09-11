import * as actions from './followerSlice';
import api from '../../utils/api';

const populateResults = results => {
  return {
    READ: actions.readFollowers(results),
    PAGINATE: actions.paginateFollowers(results),
    CREATE: actions.createFollower(results),
    DELETE: actions.deleteFollower(results)
  };
};

export const fetchFollowers = (
  url,
  method,
  operation,
  data = null
) => async dispatch => {
  dispatch(actions.loadFollowers());
  try {
    const response = await api({ url, method, data });
    dispatch(populateResults(response.data)[operation]);
  } catch (err) {
    dispatch(actions.errorFollower());
  }
};
