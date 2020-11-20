import React from 'react';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

/**
 * component that renders the tweet options of commenting, retweeting, and liking tweets
 * 
 */

const TweetHandler = () => {
  return (
      <ul className = "handlers">
        <li className = "handlers__button handlers__button--comment"><FontAwesomeIcon icon={faComment} /></li>
        <li className = "handlers__button handlers__button--retweet"><FontAwesomeIcon icon={faRetweet} /></li>
        <li className = "handlers__button handlers__button--likes"><FontAwesomeIcon icon={faHeart} /></li>
      </ul>
  )
}

export default TweetHandler;