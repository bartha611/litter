import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../components/sidebar';
import TweetButton from '../components/tweets/tweetButton';
import TweetList from '../components/tweets/tweetList';

const Home = () => {
  const [tweet, setTweet] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const submit = () => {
    console.log(tweet);
  };
  return (
    <Container style={{ maxWidth: '1275px' }}>
      <Row>
        <Col xs="2" md="2" lg="2">
          <Sidebar />
        </Col>
        <Col xs="8" md="8" lg="6">
          <TweetButton setTweet={setTweet} user={user.user} submit={submit} />
          <TweetList />
        </Col>
        <Col xs="2" md="2" lg="4">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
