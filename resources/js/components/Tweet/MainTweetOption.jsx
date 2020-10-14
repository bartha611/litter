import React from 'react';
import PropTypes from 'prop-types'


const MainTweetOption = ({ tweet }) => {
  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}

MainTweetOption.propTypes = {
  tweet: PropTypes.shape({
    replies_count: PropTypes.number.isRequired,

  }) 
}

export default MainTweetOption;