import * as types from './types';

export const tweetRequest = (url, method, operation, payload = {}) => {
  return {
    type: types.TWEET_REQUEST,
    meta: {
      url,
      method,
      operation
    },
    payload
  };
};

export const tweetCreate = tweet => {
  return {
    type: types.TWEET_CREATE,
    payload: tweet
  };
};

export const tweetDelete = id => {
  return {
    type: types.TWEET_DELETE,
    payload: id
  };
};

export const tweetUpdate = tweet => {
  return {
    type: types.TWEET_UPDATE,
    payload: tweet
  };
};

export const tweetLoad = () => {
  return {
    type: types.TWEET_LOAD
  };
};

export const tweetError = () => {
  return {
    type: types.TWEET_ERROR
  };
};

export const tweetRead = tweets => {
  return {
    type: types.TWEET_READ,
    payload: tweets
  };
};

export const tweetPaginate = tweets => {
  return {
    type: types.TWEET_PAGINATE,
    payload: tweets
  };
};

export const tweetIncrementCommentCount = id => {
  return {
    type: types.TWEET_INCREMENT_COMMENT_COUNT,
    payload: id
  };
};
