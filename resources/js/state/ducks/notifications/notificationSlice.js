import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  notifications: [],
  error: false
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    loadNotification(state) {
      state.loading = true;
      state.error = false;
    },
    readNotifications(state, action) {
      state.loading = false;
      state.notifications = action.payload;
    },
    errorNotification(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export default notificationSlice.reducer;
export const {
  loadNotification,
  readNotifications,
  errorNotification
} = notificationSlice.actions;
