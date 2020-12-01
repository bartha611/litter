import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  following: [],
  cursor: null,
  error: false
};

const followerSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    loadFollowers(state) {
      state.loading = true;
      state.error = false;
    },
    readFollowers(state, action) {
      state.loading = false;
      state.following = action.payload.following;
      state.cursor = action.payload.cursor;
    },
    paginateFollowers(state, action) {
      state.loading = false;
      state.following = state.following.concat(action.payload.following);
      state.cursor = action.payload.cursor;
    },
    createFollower(state, action) {
      state.loading = false;
      state.following = state.following.map(follower => {
        follower.follower_user.id === action.payload.following_id
          ? Object.assign({}, follower, { followed_user: true })
          : follower;
      });
    },
    deleteFollower(state, action) {
      state.loading = false;
      state.following = state.following.map(follower => {
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
