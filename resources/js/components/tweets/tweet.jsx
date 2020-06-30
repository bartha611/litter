import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TweetView = () => {
  const [tweet, setTweet] = useState('');
  const user = useSelector(state => state.auth);
  const submit = () => {
    console.log(user);
  };

  return (
    <div className="container">
      <form className="col-6 m-auto">
        <div className="form-group">
          <div id="tweetArea" className=" col-12 border">
            <div className="row">
              <div id="image" className="col-2">
                😀
              </div>
              <div
                contentEditable
                placeholder="What is on your mind"
                className="col-10 h-100"
                id="message"
                onChange={e => setTweet(e.target.value)}
              ></div>
            </div>
            <div className="row justify-content-end mt-2">
              <button
                type="button"
                id="tweetSubmit"
                className="btn-primary"
                onClick={() => submit()}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetView;
