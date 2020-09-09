import * as types from './types';

const initialState = {
  loading: false,
  tweets: [],
  error: false,
  cursor: null,
  user: null
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
        loading: false,
        error: false
      };
    }
    case types.TWEET_PAGINATE: {
      return {
        ...state,
        tweets: [...state.tweets, ...action.payload.tweets],
        cursor: action.payload.cursor,
        loading: false,
        error: false
      };
    }
    case types.TWEET_READ: {
      return {
        ...state,
        tweets: action.payload.tweets,
        loading: false,
        cursor: action.payload.cursor,
        user: action.payload.user,
        error: false
      };
    }
    case types.TWEET_UPDATE: {
      return {
        ...state,
        tweets: state.tweets.map(tweet =>
          tweet.id === action.payload.id ? action.payload : tweet
        ),
        loading: false,
        error: false
      };
    }
    case types.TWEET_DELETE: {
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        loading: false,
        error: false
      };
    }
    case types.TWEET_INCREMENT_COMMENT_COUNT: {
      return {
        ...state,
        tweets: state.tweets.map(tweet =>
          tweet.id === String(action.payload)
            ? Object.assign({}, tweet, {
                comment_count: String(Number(tweet.comment_count) + 1)
              })
            : tweet
        )
      };
    }
    case types.TWEET_ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
}
