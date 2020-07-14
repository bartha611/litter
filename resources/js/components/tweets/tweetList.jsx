import React from 'react';
import { useSelector } from 'react-redux';

export const TweetList = () => {
  const tweets = useSelector(state => state.tweets.tweets);
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
          <div key={tweet.id} className="border tweet">
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
              {tweet.loading && <div>IsLoading</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TweetList;
