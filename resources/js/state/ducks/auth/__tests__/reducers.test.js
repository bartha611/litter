import reducer from '../reducers';
import * as actions from '../actions';

const initialState = {
  loading: false,
  user: null,
  error: false
};

const newUser = {
  id: 24,
  username: 'adambarth',
  profile_photo: 'www.fakephoto.com'
};
describe('auth reducer', () => {
  it('should handle the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle load', () => {
    expect(reducer(initialState, actions.authLoad())).toEqual({
      ...initialState,
      loading: true
    });
  });
  it('should handle login', () => {
    expect(reducer(initialState, actions.authLogin(newUser))).toEqual({
      ...initialState,
      user: newUser
    });
  });
  it('should handle logging out', () => {
    expect(
      reducer({ ...initialState, user: newUser }, actions.authLogout())
    ).toEqual(initialState);
  });

  it('should handle error', () => {
    expect(reducer(initialState, actions.authError())).toEqual({
      ...initialState,
      error: true
    });
  });
});
