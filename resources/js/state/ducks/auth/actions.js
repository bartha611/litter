import * as types from './types';

export const authRequest = (method, url, operation, payload = {}) => {
  return {
    type: types.AUTH_REQUEST,
    payload,
    meta: {
      url,
      method,
      operation
    }
  };
};

export const authLoad = () => {
  return {
    type: types.AUTH_LOAD
  };
};

export const authLogin = user => {
  return {
    type: types.AUTH_LOGIN,
    payload: user
  };
};

export const authLogout = () => {
  return {
    type: types.AUTH_LOGOUT
  };
};

export const authError = () => {
  return {
    type: types.AUTH_ERROR
  };
};
