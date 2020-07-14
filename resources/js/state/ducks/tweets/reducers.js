import * as types from './types';

const initialState = {
  loading: false,
  tweets: [],
  error: false,
  cursor: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TWEET_LOAD: {
      return { ...state, loading: true };
    }
    case types.TWEET_CREATE: {
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
        loading: false
      };
    }
    case types.TWEET_READ: {
      return {
        ...state,
        tweets: [...state.tweets, ...action.payload.tweets],
        loading: false,
        cursor: action.payload.cursor
      };
    }
    case types.TWEET_UPDATE: {
      return {
        ...state,
        tweets: state.tweets.map(tweet =>
          tweet.id === action.payload.id ? action.payload : tweet
        ),
        loading: false
      };
    }
    case types.TWEET_DELETE: {
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        loading: false
      };
    }
    case types.TWEET_ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
}
