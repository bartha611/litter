import { mount, shallow } from 'enzyme';
import React, { useState as useStateMock } from 'react';
import Login from '../../views/Login';
import * as auth from '../../state/ducks/auth/authThunk';
import { Input } from 'reactstrap';

const user = {
  error: false
};

const mockDispatch = jest.fn();
const mockHistory = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn()
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: () => jest.fn().mockReturnValue(user)
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => mockHistory
}));

jest.mock('../../state/ducks/auth/authSlice', () => ({
  ...jest.requireActual('../../state/ducks/auth/authSlice'),
  resetAuth: jest.fn(),
  fetchAuth: jest.fn()
}));

describe('Login Component', () => {
  it('should mount', () => {
    mount(<Login />);
  });
  it('should change input values with change', () => {
    const wrapper = mount(<Login />);
    const elements = wrapper.find('.login__input');
    elements.at(1).simulate('change', { target: { value: 'adam' } });
    elements.at(2).simulate('change', { target: { value: 'password' } });
    expect(
      wrapper
        .find('.login__input')
        .at(1)
        .prop('value')
    ).toEqual('adam');
    expect(
      wrapper
        .find('.login__input')
        .at(2)
        .prop('value')
    ).toEqual('password');
  });
  it('should call dispatch with right params', () => {
    const wrapper = mount(<Login />);
    const fetchAuthSpy = jest
      .spyOn(auth, 'fetchAuth')
      .mockImplementation(() => 3);
    const elements = wrapper.find('.login__input');
    elements.at(1).simulate('change', { target: { value: 'adam' } });
    elements.at(2).simulate('change', { target: { value: 'password' } });
    wrapper
      .find('.login__button')
      .at(0)
      .simulate('click');
    expect(mockDispatch).toHaveBeenCalled();
    expect(fetchAuthSpy).toHaveBeenCalled();
    expect(fetchAuthSpy).toHaveBeenCalledWith(
      '/api/user/login',
      'LOGIN',
      mockHistory,
      { password: 'password', username: 'adam' }
    );
  });
});
