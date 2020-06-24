import { runSaga } from 'redux-saga';
import * as actions from '../actions';
import { fetchTweets } from '../sagas';
import * as api from '../../../utils/apiService';

const tweetData = [{ id: 1, tweet: 'fake tweet 1' }];
describe('tweet saga', () => {
  it('should do something', async () => {
    const action = actions.tweetRequest('/api/tweet/1', 'GET');
    const requestApi = jest
      .spyOn(api, 'default')
      .mockImplementation(() => Promise.resolve(tweetData));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchTweets,
      action
    );
    expect(dispatched[1]).toEqual(actions.tweetRead(tweetData));
    requestApi.mockClear();
  });

  it('should handle post request', async () => {
    const action = {
      payload: tweetData,
      meta: {
        method: 'POST',
        url: '/api/tweet'
      }
    };
    const requestApi = jest
      .spyOn(api, 'default')
      .mockImplementation(() => Promise.resolve(tweetData));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchTweets,
      action
    );
    expect(dispatched[1]).toEqual(actions.tweetCreate(tweetData));
    requestApi.mockClear();
  });

  it('should handle update request', async () => {
    const action = {
      payload: tweetData,
      meta: {
        method: 'UPDATE',
        url: `/api/tweet/${tweetData[0].id}`
      }
    };
    const requestApi = jest
      .spyOn(api, 'default')
      .mockImplementation(() => Promise.resolve(tweetData));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchTweets,
      action
    );
    expect(dispatched[1]).toEqual(actions.tweetUpdate(tweetData));
    requestApi.mockClear();
  });

  it('should handle delete request', async () => {
    const action = {
      meta: {
        method: 'DELETE',
        url: `/api/url/${tweetData[0].id}`
      }
    };
    const requestApi = jest
      .spyOn(api, 'default')
      .mockImplementation(() => Promise.resolve(tweetData[0].id));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchTweets,
      action
    );
    expect(dispatched[1]).toEqual(actions.tweetDelete(tweetData[0].id));
    requestApi.mockClear();
  });

  it('should handle errors', async () => {
    const action = {
      payload: tweetData,
      meta: {
        method: 'POST',
        url: '/api/tweet'
      }
    };
    const requestApi = jest
      .spyOn(api, 'default')
      .mockImplementation(() => Promise.reject('error'));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchTweets,
      action
    );
    expect(dispatched[1]).toEqual(actions.tweetError());
  });
});
