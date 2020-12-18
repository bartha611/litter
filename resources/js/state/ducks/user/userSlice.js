const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  users: [],
  cursor: null,
  error: false
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUser(state) {
      state.loading = true;
      state.error = false;
    },
    readUser(state, action) {
      state.loading = false;
      state.cursor = action.payload.cursor;
      state.users = action.payload.users;
    },
    paginateUsers(state, action) {
      state.loading = false;
      state.cursor = action.payload.cursor;
      state.users = state.users.concat(action.payload.users);
    },
    createFollower(state, action) {
      state.loading = false;
      state.users.map(user => {
        user.followed_user =
          user.id === action.payload.following_id
            ? action.payload.id
            : user.followed_user;
      });
    },
    deleteFollower(state, action) {
      state.users.map(user => {
        user.followed_user =
          user.followed_user === action.payload.id ? null : user.followed_user;
      });
    },
    errorUser(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export const {
  loadUser,
  readUser,
  paginateUsers,
  errorUser,
  createFollower,
  deleteFollower
} = userSlice.actions;
export default userSlice.reducer;
