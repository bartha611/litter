import * as actions from './userSlice';
import api from '../../utils/api';

const populateResults = results => {
  return {
    READ: actions.readUser(results),
    PAGINATE: actions.paginateUsers(results),
    SEARCH: actions.searchUsers(results),
    CREATE_FOLLOWER: actions.createFollower(results),
    DELETE_FOLLOWER: actions.deleteFollower(results)
  };
};

export const fetchUsers = (
  url,
  method,
  operation,
  data = null
) => async dispatch => {
  dispatch(actions.loadUser());
  try {
    const response = await api({ url, method, data });
    dispatch(populateResults(response.data)[operation]);
  } catch (err) {
    dispatch(actions.errorUser());
  }
};
