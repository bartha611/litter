import { mount, shallow } from 'enzyme';
import React from 'react';
import { Link, Router as BrowserRouter } from 'react-router-dom';
import { history } from '../../utils/history';
import Tweet from '../../components/Tweet/Tweet';
import { mockData } from '../dummyData';

const mockHistoryPush = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest
    .fn()
    .mockReturnValue({ pathname: '/bartha611/status/tweet/2' }),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe('Tweet Component', () => {
  let tweet;
  beforeEach(() => {
    tweet = mockData.parent_tweets[0];
    mockHistoryPush.mockClear();
    mockDispatch.mockClear();
  });
  it('should mount', () => {
    mount(
      <BrowserRouter history={history}>
        <Tweet tweet={tweet} line={true} />
      </BrowserRouter>
    );
  });
  it('should go to tweet page on click on the tweet body', () => {
    const wrapper = shallow(<Tweet tweet={tweet} line={false} />);
    wrapper
      .find('.tweet')
      .simulate('click', { target: { className: 'tweet__body' } });
    expect(mockHistoryPush).toHaveBeenCalled();
  });
  it('should not go to tweet page when user clicks author', () => {
    const wrapper = shallow(<Tweet tweet={tweet} line={false} />);
    wrapper
      .find('.tweet')
      .simulate('click', { target: { className: 'tweet__author' } });
    expect(mockHistoryPush).not.toHaveBeenCalled();
  });
  it('should have the right urls for Links', () => {
    const wrapper = shallow(<Tweet tweet={tweet} line={false} />);
    expect(
      wrapper
        .find(Link)
        .at(0)
        .prop('to')
    ).toBe('/mcglynn.geo');
  });
  it('should have a line connecting tweets if line available', () => {
    const wrapper = shallow(<Tweet tweet={tweet} line={true} />);
    expect(wrapper.find('.tweet__line').exists()).toBeTruthy();
  });
  it('should not have line if line prop set to disabled', () => {
    const wrapper = shallow(<Tweet tweet={tweet} line={false} />);
    expect(wrapper.find('.tweet__line').exists()).toBeFalsy();
  });
});
