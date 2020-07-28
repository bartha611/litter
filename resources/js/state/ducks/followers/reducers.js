import * as types from './types';

const initialState = {
  loading: false,
  followers: [],
  error: false,
  user: null,
  cursor: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FOLLOWER_LOAD:
      return {
        ...state,
        loading: true
      };
    case types.FOLLOWER_READ:
      return {
        ...state,
        loading: false,
        followers: action.payload.followers,
        user: action.payload.user,
        cursor: action.payload.cursor,
        error: false
      };
    case types.FOLLOWER_PAGINATE:
      return {
        ...state,
        loading: false,
        followers: [...state.followers, ...action.payload.followers],
        cursor: action.payload.cursor,
        error: false
      };
    case types.FOLLOWER_CREATE:
      return {
        ...state,
        loading: false,
        error: false,
        followers: state.followers.map(follower =>
          follower.follower_id === action.payload.follower_id
            ? Object.assign({}, follower, { followed: true })
            : follower
        )
      };
    case types.FOLLOWER_DELETE:
      return {
        ...state,
        loading: false,
        error: false,
        followers: state.followers.map(follower =>
          follower.id === action.payload
            ? Object.assign({}, follower, { followed: false })
            : follower
        )
      };
    case types.FOLLOWER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
