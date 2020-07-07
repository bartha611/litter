import React from 'react';
import PropTypes from 'prop-types';

const userTweets = [
  {
    tweet:
      'Hello there adsfjalkdsjflkajsdlkfjaksdjlfkjkasdjkfjsakdjfkjsadkjfkjdsalkfjalkdsjflkjsalkdjflksajdkfjalksdjflkajsdkfsajflkajskfjaskfj',
    user_id: '101',
    updated_at: '2020-06-30T22:16:13.000000Z',
    id: '1',
    user: {
      id: 101,
      name: 'adam',
      profile_photo:
        'https://insta611.s3.amazonaws.com/images/1591320571download.png'
    }
  },
  {
    tweet: 'Sheeeitttttt',
    user_id: '101',
    updated_at: '2020-06-30T22:16:13.000000Z',
    id: '2',
    user: {
      id: 101,
      name: 'adam',
      profile_photo:
        'https://insta611.s3.amazonaws.com/images/1591320571download.png'
    }
  }
];

export const TweetList = ({ tweets }) => {
  const sanitizeDate = date => {
    const newDate = new Date(date).toDateString();
    return newDate
      .split(' ')
      .slice(1, 3)
      .join(' ');
  };

  return (
    <div>
      {tweets.map(tweet => {
        return (
          <div className="border tweet">
            <div className="tweet__image">
              <img
                src={tweet.user.profile_photo}
                className="tweet__photo"
                alt="user profile photo"
              />
            </div>
            <div className="tweet__body">
              <div className="tweet__info">
                <span className="tweet__author">
                  <b>{tweet.user.name}</b>
                </span>
                <span className="text-muted ml-2 tweet__username">
                  @{tweet.user.name}
                </span>
                <span className="text-muted ml-2 tweet__date">
                  {sanitizeDate(tweet.updated_at)}
                </span>
              </div>
              <div className="tweet__tweet">{tweet.tweet}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tweet: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_photo: PropTypes.string.isRequired
      })
    }).isRequired
  ).isRequired
};

const TweetView = () => {
  return <TweetList tweets={userTweets} />;
};

export default TweetView;
