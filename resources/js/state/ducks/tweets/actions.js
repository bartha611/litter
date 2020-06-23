import * as types from './types';

export const tweetRequest = (url, method, payload = {}) => {
  return {
    type: types.TWEET_REQUEST,
    meta: {
      url,
      method
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
