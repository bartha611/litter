import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  parent_tweets: [],
  reply_tweets: [],
  cursor: null,
  error: false
};

const replySlice = createSlice({
  name: 'replies',
  initialState,
  reducers: {
    loadReply(state) {
      state.loading = true;
      state.error = false;
    },
    readReply(state, action) {
      state.cursor = action.payload.cursor;
      state.parent_tweets = action.payload.parent_tweets;
      state.reply_tweets = action.payload.reply_tweets;
      state.loading = false;
    },
    paginateReply(state, action) {
      state.cursor = action.payload.cursor;
      state.reply_tweets = action.payload.reply_tweets;
      state.loading = false;
    },
    likeReply(state, action) {
      state.loading = false;
      state.reply_tweets = state.reply_tweets.map(tweet => {
        tweet.likes_count =
          tweet.id === action.payload.tweet.id
            ? tweet.likes_count + 1
            : tweet.likes_count;
        tweet.liked_tweet =
          tweet.id === action.payload.tweet_id ? 1 : tweet.liked_tweet;
      });
    },
    unlikeReply(state, action) {
      state.loading = false;
      state.reply_tweets = state.reply_tweets.map(tweet => {
        tweet.likes_count =
          tweet.id === action.payload.tweet_id
            ? tweet.likes_count - 1
            : tweet.likes_count;
        tweet.liked_tweet =
          tweet.id === action.payload.tweet_id ? 0 : tweet.liked_tweet;
      });
    },
    errorReply(state) {
      state.error = true;
      state.loading = false;
    },
    createReply(state, action) {
      const parent = state.parent_tweets[state.parent_tweets.length - 1];

      state.reply_tweets =
        action.payload.reply_tweet_id === parent
          ? [action.payload, ...state.reply_tweets]
          : state.reply_tweets;
      state.loading = false;
    },
    deleteReply(state, action) {
      state.reply_tweets = state.reply_tweets.filter(
        tweet => tweet.id !== action.payload.id
      );
    }
  },
  extraReducers: {}
});

export const {
  loadReply,
  readReply,
  paginateReply,
  createReply,
  deleteReply,
  errorReply
} = replySlice.actions;

export default replySlice.reducer;
