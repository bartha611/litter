import * as types from './types';

const initialState = {
  loading: false,
  users: [],
  error: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOAD:
      return {
        ...state,
        loading: true
      };
    case types.SEARCH_READ:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default searchReducer;
