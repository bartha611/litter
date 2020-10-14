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
    <div>
      <ul>
        <li><FontAwesomeIcon icon={faComment} /></li>
        <li><FontAwesomeIcon icon={faRetweet} /></li>
        <li><FontAwesomeIcon icon={faHeart} /></li>
      </ul>
    </div>
  )
}