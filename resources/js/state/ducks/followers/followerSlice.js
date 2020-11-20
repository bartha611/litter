import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  followers: [],
  cursor: null,
  error: false
};

const followerSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {
    loadFollowers(state) {
      state.loading = true;
      state.error = false;
    },
    readFollowers(state, action) {
      state.loading = false;
      state.followers = action.payload.followers;
      state.cursor = action.payload.cursor;
    },
    paginateFollowers(state, action) {
      state.loading = false;
      state.followers = state.followers.concat(action.payload.followers);
      state.cursor = action.payload.cursor;
    },
    createFollower(state, action) {
      state.loading = false;
      state.followers = state.followers.map(follower => {
        follower.follower_user.id === action.payload.following_id
          ? Object.assign({}, follower, { followed_user: true })
          : follower;
      });
    },
    deleteFollower(state, action) {
      state.loading = false;
      state.followers = state.followers.map(follower => {
        follower.follower_user.id === action.payload.following_id
          ? Object.assign({}, follower, { followed_user: false })
          : follower;
      });
    },
    errorFollower(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export const {
  loadFollowers,
  readFollowers,
  createFollower,
  deleteFollower,
  paginateFollowers,
  errorFollower
} = followerSlice.actions;

export default followerSlice.reducer;
