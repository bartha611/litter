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
    errorReply(state) {
      state.error = true;
      state.loading = false;
    },
    createReply(state, action) {
      state.reply_tweets = [action.payload, ...state.reply_tweets];
      state.loading = false;
    },
    deleteReply(state, action) {
      state.reply_tweets = state.reply_tweets.filter(
        tweet => tweet.id !== action.payload.id
      );
    }
  }
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
