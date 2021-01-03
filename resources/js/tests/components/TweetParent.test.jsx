import { mount, shallow } from 'enzyme';
import React from 'react';
import { Link, Router as BrowserRouter } from 'react-router-dom';
import { history } from '../../utils/history';
import TweetParent from '../../components/Tweet/TweetParent';
import { mockData } from '../dummyData';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({ pathname: '/bartha611/status/2' })
}));

describe('TweetParent component', () => {
  it('mounts', () => {
    mount(
      <BrowserRouter history={history}>
        <TweetParent tweet={mockData.parent_tweets[0]} />
      </BrowserRouter>
    );
  });
  it('should display correct time value when minute total is under 10 minutes and hours > 12', () => {
    const wrapper = shallow(<TweetParent tweet={mockData.parent_tweets[0]} />);
    expect(wrapper.find('.TweetParent__time').text()).toBe('2:04 PM');
  });
  it('should display correct time value when time is at 0 hours', () => {
    const parent_tweet = mockData.parent_tweets[0];
    parent_tweet.updated_at = '2020-04-23 0:09:59';
    const wrapper = shallow(<TweetParent tweet={parent_tweet} />);
    expect(wrapper.find('.TweetParent__time').text()).toBe('12:09 AM');
  });
  it('should display correct date value', () => {
    const wrapper = shallow(<TweetParent tweet={mockData.parent_tweets[0]} />);
    expect(wrapper.find('.TweetParent__date').text()).toBe('Apr 23 2020');
  });
  it('should display correct format for retweets and likes count when count < 1000', () => {
    const parent_tweet = mockData.parent_tweets[0];
    parent_tweet.likes_count = 999;
    const wrapper = shallow(<TweetParent tweet={parent_tweet} />);
    expect(
      wrapper
        .find('.TweetParent__counts')
        .at(0)
        .text()
    ).toBe('15 ');
    expect(
      wrapper
        .find('.TweetParent__counts')
        .at(1)
        .text()
    ).toBe('999 ');
  });
  it('should display correct format for retweets and likes count when count < 1000000', () => {
    const parent_tweet = mockData.parent_tweets[0];
    parent_tweet.retweets_count = 1002;
    parent_tweet.likes_count = 999999;
    const wrapper = shallow(<TweetParent tweet={parent_tweet} />);
    const retweets_element = wrapper.find('.TweetParent__counts').at(0);
    const likes_element = wrapper.find('.TweetParent__counts').at(1);
    expect(likes_element.text()).toBe('999.9K ');
    expect(retweets_element.text()).toBe('1K ');
  });
  it('should display correct format for retweets and likes count when count < 1000000', () => {
    const parent_tweet = mockData.parent_tweets[0];
    parent_tweet.retweets_count = 1000100;
    parent_tweet.likes_count = 999999999;
    const wrapper = shallow(<TweetParent tweet={parent_tweet} />);
    const retweets_element = wrapper.find('.TweetParent__counts').at(0);
    const likes_element = wrapper.find('.TweetParent__counts').at(1);
    expect(likes_element.text()).toBe('999.9M ');
    expect(retweets_element.text()).toBe('1M ');
  });
  it('should have the right path names for Links', () => {
    const parent_tweet = mockData.parent_tweets[0];
    const wrapper = shallow(<TweetParent tweet={parent_tweet} />);
    const element = wrapper.find(Link);
    expect(element.at(0).prop('to')).toEqual('/mcglynn.geo');
    expect(element.at(1).prop('to')).toMatchObject({
      pathname: '/bartha611/status/2/retweets'
    });
    expect(element.at(2).prop('to')).toMatchObject({
      pathname: '/bartha611/status/2/likes'
    });
  });
});
