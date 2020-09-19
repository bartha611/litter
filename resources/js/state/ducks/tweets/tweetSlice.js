const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  tweets: [],
  cursor: null,
  error: false,
  user: null
};

const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    loadTweet(state) {
      state.loading = true;
      state.error = false;
    },
    readTweet(state, action) {
      state.loading = false;
      state.tweets = action.payload.tweets;
      state.cursor = action.payload.cursor;
      state.user = action.payload.user;
    },
    paginateTweet(state, action) {
      state.loading = false;
      state.tweets = [...state.tweets, action.payload.tweets];
      state.cursor = action.payload.cursor;
    },
    createTweet(state, action) {
      state.loading = false;
      state.tweets = [action.payload, ...state.tweets];
    },
    deleteTweet(state, action) {
      state.loading = false;
      state.tweets = state.tweets.filter(
        tweet => tweet.id !== action.payload.id
      );
    },
    errorTweet(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export const {
  deleteTweet,
  createTweet,
  readTweet,
  paginateTweet,
  loadTweet,
  errorTweet
} = tweetSlice.actions;

export default tweetSlice.reducer;
