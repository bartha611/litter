import * as actions from './notificationSlice';
import api from '../../utils/api';

const notificationThunk = url => async dispatch => {
  dispatch(actions.loadNotification());
  try {
    const { data } = await api({ url, method: 'GET' });
    dispatch(actions.readNotifications(data));
  } catch (err) {
    dispatch(actions.errorNotification());
  }
};

export default notificationThunk;
