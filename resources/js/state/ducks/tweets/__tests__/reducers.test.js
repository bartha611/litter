import reducer from '../reducers';
import * as actions from '../actions';

const initialState = {
  loading: false,
  tweets: [],
  error: false
};

const tweets = [
  {
    id: 1,
    tweet: 'random Tweet 1'
  },
  {
    id: 2,
    tweet: 'random Tweet 2'
  },
  {
    id: 3,
    tweet: 'random Tweet 3'
  }
];

const newTweet = {
  id: 4,
  tweet: 'random tweet 4'
};

describe('tweet reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle loading request', () => {
    expect(reducer(initialState, actions.tweetLoad())).toEqual({
      ...initialState,
      loading: true
    });
  });
  it('should handle tweet creation when there are no tweets', () => {
    const actualState = {
      loading: false,
      tweets: [newTweet],
      error: false
    };

    const nextState = reducer(initialState, actions.tweetCreate(newTweet));
    expect(nextState).toEqual(actualState);
  });
  it('should handle tweet read operation', () => {
    const nextState = {
      loading: false,
      tweets: tweets,
      error: false
    };

    expect(reducer(initialState, actions.tweetRead(tweets))).toEqual(nextState);
  });
  it('should handle tweet creation when there are tweets', () => {
    const nextState = {
      loading: false,
      tweets: [newTweet, ...tweets],
      error: false
    };

    expect(
      reducer(
        { ...initialState, tweets: tweets },
        actions.tweetCreate(newTweet)
      )
    ).toEqual(nextState);
  });
  it('should handle update operation', () => {
    const updatedTweet = {
      id: 2,
      tweet: 'updated tweet 2'
    };

    const nextState = {
      loading: false,
      tweets: [...tweets.slice(0, 1), updatedTweet, tweets[2]],
      error: false
    };

    expect(
      reducer(
        { ...initialState, tweets: tweets },
        actions.tweetUpdate(updatedTweet)
      )
    ).toEqual(nextState);
  });
  it('should handle delete operation', () => {
    const nextState = {
      loading: false,
      tweets: [tweets[0], tweets[2]],
      error: false
    };
    expect(
      reducer({ ...initialState, tweets: tweets }, actions.tweetDelete(2))
    ).toEqual(nextState);
  });
  it('should handle error operation', () => {
    expect(reducer(initialState, actions.tweetError())).toEqual({
      ...initialState,
      error: true
    });
  });
});
