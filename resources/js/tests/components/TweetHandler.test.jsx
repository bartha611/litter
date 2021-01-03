import { mount, shallow } from 'enzyme';
import React from 'react';
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import { Link, Router as BrowserRouter } from 'react-router-dom';
import { history } from '../../utils/history';
import TweetHandlers from '../../components/Tweet/TweetHandlers';
import { mockData } from '../dummyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const mockDispatch = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({ pathname: '', state: '' })
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}));

describe('TweetHandler component', () => {
  let tweet;
  beforeAll(() => {
    tweet = mockData.parent_tweets[0];
  });
  it('should mount', () => {
    mount(
      <BrowserRouter history={history}>
        <TweetHandlers tweet={tweet} counts={true} />
      </BrowserRouter>
    );
  });
  it('should display correct counts for replies, retweets, and likes', () => {
    const wrapper = shallow(<TweetHandlers tweet={tweet} counts={true} />);
    const element = wrapper.find('.handlers__count');
    expect(element.at(0).text()).toBe('38 ');
    expect(element.at(1).text()).toBe('15 ');
    expect(element.at(2).text()).toBe('3 ');
  });
  it('should display correct count formats if they over 1000', () => {
    tweet.replies_count = 999990;
    tweet.retweets_count = 12344;
    tweet.likes_count = 1001;
    const wrapper = shallow(<TweetHandlers tweet={tweet} counts={true} />);
    const element = wrapper.find('.handlers__count');
    expect(element.at(0).text()).toBe('999.9K ');
    expect(element.at(1).text()).toBe('12.3K ');
    expect(element.at(2).text()).toBe('1K ');
  });
  it('should display correct count formats if they are over 1000000', () => {
    tweet.replies_count = 999999999;
    tweet.retweets_count = 19900000;
    tweet.likes_count = 1000001;
    const wrapper = shallow(<TweetHandlers tweet={tweet} counts={true} />);
    const element = wrapper.find('.handlers__count');
    expect(element.at(0).text()).toBe('999.9M ');
    expect(element.at(1).text()).toBe('19.9M ');
    expect(element.at(2).text()).toBe('1M ');
  });
  it('should not display counts if counts prop is set to false', () => {
    const wrapper = shallow(<TweetHandlers tweet={tweet} counts={false} />);
    const element = wrapper.find('.handlers__count');
    expect(element.exists()).toBeFalsy();
  });
  it('should change heart shape when tweet prop changes', () => {
    const wrapper = shallow(<TweetHandlers tweet={tweet} counts={false} />, {
      lifecycleExperimental: true
    });
    const element = wrapper.find(FontAwesomeIcon).at(2);
    expect(element.prop('color')).toBe('inherit');
    expect(element.prop('icon')).toBe(faHeart);
    const newTweet = {
      ...tweet,
      liked_tweet: 1
    };
    mockDispatch.mockImplementation(() =>
      wrapper.setProps({ tweet: newTweet })
    );
    wrapper
      .find('.handlers__handler')
      .at(2)
      .simulate('click');
    expect(mockDispatch).toHaveBeenCalled();
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .at(2)
        .prop('color')
    ).toBe('red');
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .at(2)
        .prop('icon')
    ).toBe(faHeartFull);
  });
  it('should have correct react-router Link attributes', () => {
    const wrapper = shallow(<TweetHandlers tweet={tweet} counts={true} />);
    const elements = wrapper.find(Link);
    const commentObject = { pathname: '/compose/tweet', state: { tweet } };
    expect(elements.at(0).prop('to')).toMatchObject(commentObject);
  });
});
