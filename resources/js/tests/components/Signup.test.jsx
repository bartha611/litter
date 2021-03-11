import { mount } from 'enzyme';
import React from 'react';
import SignUp from '../../components/auth/Signup';

const mockDispatch = jest.fn();
const mockHistory = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => mockHistory
}));

describe('Signup component', () => {
  it('should change input values upon change', () => {});
});
