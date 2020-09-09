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
    readReplies(state, action) {
      state.cursor = action.payload.cursor;
      state.parent_tweets = action.payload.parent_tweets;
      state.reply_tweets = action.payload.reply_tweets;
    }
  }
});