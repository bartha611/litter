import * as actions from './authSlice';
import api from '../../utils/api';

const populateResults = results => {
  return {
    LOGIN: actions.loginAuth(results),
    SIGNUP: actions.loadAuth(results),
    LOGOUT: actions.logoutAuth(),
    UPDATE: actions.updateAuth(results)
  };
};

export const fetchAuth = (
  url,
  operation,
  history,
  payload = null
) => async dispatch => {
  dispatch(actions.loadAuth());
  try {
    if (operation === 'LOGIN' || operation === 'SIGNUP') {
      const { data } = await api({
        url,
        method: 'POST',
        data: payload
      });
      dispatch(actions.loginAuth(data.user));
      localStorage.setItem('token', data.token);
      history.push('/');
    } else if (operation === 'LOGOUT') {
      await api({ url: '/api/user/logout', method: 'POST' });
      dispatch(actions.logoutAuth());
      localStorage.removeItem('token');
      history.push('/login');
    } else {
      const { data } = await api({
        url,
        method: 'POST',
        data: payload,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      dispatch(populateResults(data)[operation]);
      history.goBack();
    }
  } catch (err) {
    dispatch(actions.errorAuth());
  }
};
