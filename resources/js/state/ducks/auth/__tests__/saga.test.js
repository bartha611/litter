import * as api from '../../../utils/apiService';
import * as actions from '../actions';
import { fetchUser } from '../sagas';
import { runSaga } from 'redux-saga';

const fakeLogin = {
  username: 'fakeUser',
  password: 'fakePassword'
};

const fakeUser = {
  user: {
    id: 24,
    username: 'fakeUser',
    profile_photo: 'www.fakePhoto.com'
  },
  token: 'fakeToken'
};

describe('auth saga', () => {
  let dispatched;
  let requestApi;
  beforeEach(() => {
    dispatched = [];
    requestApi = jest.spyOn(api, 'default');
  });
  it('should handle login request', async () => {
    const action = actions.authRequest(
      'POST',
      '/api/user/login',
      'LOGIN',
      fakeUser
    );
    requestApi.mockImplementation(() => Promise.resolve(fakeUser));
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchUser,
      action
    );
    expect(localStorage.getItem('token')).toEqual(fakeUser.token);
    expect(dispatched[1]).toEqual(actions.authLogin(fakeUser.user));
    requestApi.mockClear();
  });

  it('should handle logout request', async () => {
    const action = actions.authRequest('POST', '/api/user/logout', 'LOGOUT');
    requestApi.mockImplementation(() => Promise.resolve('success'));
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchUser,
      action
    );
    expect(localStorage.getItem('token')).toBeNull();
    expect(dispatched[1]).toEqual(actions.authLogout());
    requestApi.mockClear();
  });

  it('should handle errors', async () => {
    const action = actions.authRequest('POST', '/api/user/logout', 'LOGOUT');
    requestApi.mockImplementation(() => Promise.reject('error'));
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchUser,
      action
    );
    expect(dispatched[1]).toEqual(actions.authError());
  });
});
