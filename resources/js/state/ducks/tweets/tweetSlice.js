const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  tweets: [],
  cursor: null,
  error: false
};

const commentSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    loadTweet(state) {
      state.loading = true;
      state.error = false;
    },
    readTweets(state, action) {
      state.loading = false;
      state.tweets = action.payload;
    },
    paginateTweets(state, action) {
      state.loading = false;
      state.tweets = [...state.tweets, action.payload.tweets];
    }
  }
});
