import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, resetAuth } from '../state/ducks/auth/';
import { useHistory } from 'react-router-dom';
import {
  Alert,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAuth());
  }, []);

  useEffect(() => {
    const handleEnter = e => {
      if (e.keyCode === 13) {
        submit();
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  });

  const submit = async () => {
    await dispatch(
      fetchAuth('/api/user/login', 'LOGIN', history, {
        username,
        password
      })
    );
  };

  return (
    <Container className="login">
      <Col md={{ size: '8', offset: '2' }} lg={{ size: '6', offset: '3' }}>
        <h1 className="title text-center">Login to Bitter</h1>
        <br />
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={faUser} size="2x" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Username"
            type="text"
            className="login__input"
            onChange={e => setUsername(e.target.value)}
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={faKey} size="2x" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Password"
            type="password"
            className="login__input"
            onChange={e => setPassword(e.target.value)}
          />
        </InputGroup>
        <br />
        <Button
          color="primary"
          className="login__button"
          onClick={() => submit()}
        >
          Submit
        </Button>
        <br />
        <div className="signup text-center p-2">
          New member? <a href="/signup">Sign Up</a>
        </div>
        {user.error && (
          <Alert color="danger" className="p-2">
            Error in Logging in. Incorrect username and/or password provided
          </Alert>
        )}
      </Col>
    </Container>
  );
};

export default Login;
