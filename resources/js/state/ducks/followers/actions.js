import * as types from './types';

export const followerLoad = () => {
  return {
    type: types.FOLLOWER_LOAD
  };
};

export const followerRequest = (url, method, operation, payload = {}) => {
  return {
    type: types.FOLLOWER_REQUEST,
    payload,
    meta: {
      url,
      method,
      operation
    }
  };
};

export const followerRead = payload => {
  return {
    type: types.FOLLOWER_READ,
    payload
  };
};

export const followerPaginate = payload => {
  return {
    type: types.FOLLOWER_PAGINATE,
    payload
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

export const followerError = () => {
  return {
    type: types.FOLLOWER_ERROR
  };
};
