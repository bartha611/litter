import * as types from './types';

export const requestComment = (url, operation, method, payload = {}) => {
  return {
    type: types.COMMENT_REQUEST,
    payload: payload,
    meta: {
      url,
      method,
      operation
    }
  };
};

export const loadComment = () => {
  return {
    type: types.COMMENT_LOAD
  };
};

export const createComment = comment => {
  return {
    type: types.COMMENT_CREATE,
    payload: comment
  };
};

export const readComment = comments => {
  return {
    type: types.COMMENT_READ,
    payload: comments
  };
};

export const paginateComment = comments => {
  return {
    type: types.COMMENT_PAGINATE,
    payload: comments
  };
};

export const uploadComment = comment => {
  return {
    type: types.COMMENT_UPDATE,
    payload: comment
  };
};

export const deleteComment = id => {
  return {
    type: types.COMMENT_DELETE,
    payload: id
  };
};

export const errorComment = () => {
  return {
    type: types.COMMENT_ERROR
  };
};
