import * as types from './types';

export const authRequest = (method, url, payload = {}) => {
  return {
    type: types.AUTH_REQUEST,
    payload,
    meta: {
      url,
      method
    }
  };
};

export const authLoad = () => {
  return {
    type: types.AUTH_LOAD
  };
};

export const authLogin = () => {
  return {
    type: types.AUTH_LOGIN
  };
};

export const authLogout = () => {
  return {
    type: types.auth_logout
  };
};
