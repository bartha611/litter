import * as types from './types';

const initialState = {
  loading: false,
  user: null,
  error: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOAD:
      return { ...state, loading: true };
    case types.AUTH_CREATE:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        user: null
      };
  }
};

export default authReducer;
