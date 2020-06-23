import * as types from './types';

const initialState = {
  loading: false,
  tweets: [],
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TWEET_LOAD: {
      return { ...state, loading: true };
    }
    case types.TWEET_CREATE: {
      return { ...state, tweets: [action.payload, ...state.tweets] };
    }
    case types.TWEET_READ: {
      return { ...state, tweets: action.payload };
    }
    case types.TWEET_UPDATE: {
      return {
        ...state,
        tweets: state.tweets.map(tweet =>
          tweet.id === action.payload.id ? action.payload : tweet
        )
      };
    }
    case types.TWEET_DELETE: {
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
      };
    }
    case types.TWEET_ERROR: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
}
