import * as actions from './authSlice';
import api from '../../utils/api';

export const fetchAuth = (
  payload = null,
  operation,
  history
) => async dispatch => {
  dispatch(actions.loadAuth());
  try {
    if (operation === 'LOGIN' || operation === 'SIGNUP') {
      const { data } = await api({
        url: '/api/user/login',
        method: 'POST',
        data: payload
      });
      dispatch(actions.loginAuth(data.user));
      localStorage.setItem('token', data.token);
      history.push('/');
    } else {
      await api({ url: '/api/user/logout', method: 'POST' });
      dispatch(actions.logoutAuth());
      localStorage.removeItem('token');
      history.push('/login');
    }
  } catch (err) {
    dispatch(actions.errorAuth());
  }
};
