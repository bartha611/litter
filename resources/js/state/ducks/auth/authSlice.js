const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  user: null,
  error: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuth(state) {
      state.loading = true;
      state.error = false;
    },
    resetAuth(state) {
      state.loading = false;
      state.error = false;
    },
    loginAuth(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    updateAuth(state, action) {
      state.loading = false;
      state.user = action.payload.user;
    },
    logoutAuth(state) {
      state.loading = false;
      state.user = null;
    },
    errorAuth(state) {
      state.error = false;
    }
  }
});

export const {
  loadAuth,
  loginAuth,
  logoutAuth,
  resetAuth,
  updateAuth,
  errorAuth
} = authSlice.actions;

export default authSlice.reducer;
