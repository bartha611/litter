import * as actions from './searchSlice';
import api from '../../utils/api';

export const fetchUsers = search => async dispatch => {
  dispatch(actions.loadSearch());
  try {
    const response = await api.get(`/api/user?search=${search}`);
    dispatch(actions.readSearch(response.data));
  } catch (err) {
    dispatch(actions.errorSearch());
  }
};
