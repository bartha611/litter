import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { history } from '../../utils/history';
import { mount, shallow } from 'enzyme';
import { mockData } from '../dummyData';
import CommentHeader from '../../components/Comment/CommentHeader';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual,
  useSelector: jest.fn()
}));

describe('CommentHeader Component', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ parent_tweets: mockData.parent_tweets });
  });
  it('should render', () => {
    mount(
      <BrowserRouter history={history}>
        <CommentHeader />
      </BrowserRouter>
    );
  });
  it('only renders Tweet Parent when there is only one parent tweet', () => {
    const wrapper = shallow(<CommentHeader />);
    expect(wrapper.find('TweetParent')).toHaveLength(1);
    expect(wrapper.find('TweetParent').key()).toBe('2');
  });
  it('should render only one TweetParent when there is multiple tweet parents', () => {
    useSelector.mockReturnValue({ parent_tweets: mockData.reply_tweets });
    const wrapper = shallow(<CommentHeader />);
    expect(wrapper.find('TweetParent')).toHaveLength(1);
    expect(wrapper.find('Tweet')).toHaveLength(1);
    expect(wrapper.find('TweetParent').key()).toBe('279');
    expect(wrapper.find('Tweet').key()).toBe('387');
  });
});
