import React from 'react';
import { Router as BrowserRouter, useLocation } from 'react-router-dom';
import { history } from '../../utils/history';
import Comment from '../../views/Comment';
import { mockData } from '../dummyData';
import { mount } from 'enzyme';
import { useSelector } from 'react-redux';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useParams: () => ({
    name: 'bartha611',
    tweet: 1
  })
}));

describe('Comment view renders correctly', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    useLocation.mockReturnValue({ state: { from: '' } });
    useSelector.mockReturnValue({
      parent_tweets: mockData.parent_tweets,
      reply_tweets: mockData.reply_tweets
    });
    mockDispatch.mockClear();
  });
  it('renders Comment view', () => {
    mount(
      <BrowserRouter history={history}>
        <Comment background={null} />
      </BrowserRouter>
    );
  });
  it('should call useEffect properly', () => {
    mount(
      <BrowserRouter history={history}>
        <Comment background={null} />
      </BrowserRouter>
    );
    expect(mockDispatch).toBeCalled();
  });
  it('should not call dispatch fetchReplies when there is a background parameter', () => {
    const background = { pathname: '', state: '/mockUrl' };
    mount(
      <BrowserRouter history={history}>
        <Comment background={background} />
      </BrowserRouter>
    );
    expect(mockDispatch).not.toHaveBeenCalled();
  });
  it('should not call dispatch fetchReplies when location state is set', () => {
    useLocation.mockReturnValue({
      state: { from: '/bartha611/status/1/likes' }
    });
    mount(
      <BrowserRouter history={history}>
        <Comment background={null} />
      </BrowserRouter>
    );
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
