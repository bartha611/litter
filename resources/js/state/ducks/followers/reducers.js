import * as types from './types';

const initialState = {
  loading: false,
  followers: [],
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FOLLOWER_LOAD:
      return {
        ...state,
        loading: true
      };
    case types.FOLLOWER_CREATE:
      return {
        ...state,
        loading: false,
        followers: [...state.followers, action.payload]
      }
    case types.FOLLOWER_DELETE:
      return {
        ...state,
        loading: false,
        followers: state.followers.filter(follower => follower.id !== action.payload)
      }
    case types.FOLLOWER_ERROR:
      return {
        ..state,
        loading: false,
        error: true
      }
  }
}
