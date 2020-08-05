import * as types from './types';

export const searchRequest = payload => {
  return {
    type: types.SEARCH_REQUEST,
    meta: {
      method: 'GET',
      url: `/api/user?search=${payload}`
    }
  };
};

export const searchLoad = () => {
  return {
    type: types.SEARCH_LOAD
  };
};

export const searchRead = payload => {
  return {
    type: types.SEARCH_READ,
    payload
  };
};

export const searchError = () => {
  return {
    type: types.SEARCH_ERROR
  };
};
