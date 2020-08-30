import * as types from './types';

const initialState = {
  loading: false,
  comments: [],
  cursor: null,
  tweets: null,
  error: false
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMMENT_LOAD:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.COMMENT_CREATE:
      return {
        ...state,
        loading: false,
        comments: [action.payload, ...state.comments]
      };
    case types.COMMENT_READ:
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
        tweets: action.payload.tweets,
        cursor: action.payload.cursor
      };
    case types.COMMENT_PAGINATE:
      return {
        ...state,
        loading: false,
        cursor: action.payload.cursor,
        comments: [...action.payload.comments, ...state.comments]
      };
    case types.COMMENT_UPDATE:
      return {
        ...state,
        loading: false,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id ? action.payload : comment
        )
      };
    case types.COMMENT_DELETE:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(
          comment => comment.id !== action.payload.id
        )
      };
    case types.COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default commentReducer;
