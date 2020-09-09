import React from 'react';
import { useHistory } from 'react-router-dom';

const CommentCreate = () => {
  const history = useHistory();
  return (
    <div className="commentPost">
      <div className="commentPost__cancel"></div>
      <div className="commentPost">
        <div className="commenPost__info">
          <span className="commentPost__name">Hello there</span>
          <span className="commentPost__username">@Hellothere</span>
          <span className="date">2h</span>
        </div>
        <div className="commentPost__post">
          jaslkdfjlksafjdsafjlksajdfjsalkdjfkasjdf
        </div>
      </div>
    </div>
  );
};

export default CommentCreate;
