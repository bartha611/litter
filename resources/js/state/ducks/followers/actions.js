import * as types from './types';

export const followerRequest = (url, method, payload = {}) => {
  return {
    type: types.FOLLOWER_LOAD,
    payload,
    meta: {
      url,
      method
    }
  };
};

export const followerCreate = payload => {
  return {
    type: types.FOLLOWER_CREATE,
    payload
  };
};

export const followerDelete = id => {
  return {
    type: types.FOLLOWER_DELETE,
    payload: id
  };
};
