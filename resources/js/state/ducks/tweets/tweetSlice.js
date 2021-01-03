const { createSlice } = require('@reduxjs/toolkit');
import { createReply } from '../replies/replySlice';
import { updateAuth } from '../auth/authSlice';

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
      state.tweets = [...state.tweets, ...action.payload.tweets];
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
    likeTweet(state, action) {
      state.loading = false;
      state.tweets.map(tweet => {
        tweet.likes_count =
          tweet.id === action.payload.tweet_id
            ? tweet.likes_count + 1
            : tweet.likes_count;
        tweet.liked_tweet =
          tweet.id === action.payload.tweet_id ? 1 : tweet.liked_tweet;
      });
    },
    unlikeTweet(state, action) {
      state.loading = false;
      state.tweets.map(tweet => {
        tweet.likes_count =
          tweet.id === action.payload.tweet_id
            ? tweet.likes_count - 1
            : tweet.likes_count;
        tweet.liked_tweet =
          tweet.id === action.payload.tweet_id ? 0 : tweet.liked_tweet;
      });
    },
    errorTweet(state) {
      state.loading = false;
      state.error = true;
    }
  },
  extraReducers: {
    [createReply]: (state, action) => {
      state.tweets.map(tweet => {
        tweet.replies_count =
          tweet.id === action.payload.reply_tweet_id
            ? tweet.replies_count + 1
            : tweet.replies_count;
      });
    },
    [updateAuth]: (state, action) => {
      state.user = state.user.id === action.payload.user.id ? '' : state.user;
      state.user = state.user === '' ? action.payload : state.user;
    }
  }
});

export const {
  deleteTweet,
  createTweet,
  readTweet,
  paginateTweet,
  likeTweet,
  unlikeTweet,
  loadTweet,
  errorTweet
} = tweetSlice.actions;

export default tweetSlice.reducer;
