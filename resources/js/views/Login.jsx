import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest, authReset } from '../state/ducks/auth/actions';
import { useHistory } from 'react-router-dom';
import {
  Alert,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
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
    dispatch(authReset());
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
      authRequest('POST', '/api/user/login', 'LOGIN', history, {
        username,
        password
      })
    );
  };

  return (
    <Container className="mt-3 col-md-6 col-lg-4">
      <h1 className="title text-center">Login to Bitter</h1>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faUser} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Username"
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faKey} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </InputGroup>
      <br />
      <Button color="primary" className="w-100" onClick={() => submit()}>
        Submit
      </Button>
      <br />
      <div className="signup text-center p-2">
        New member? <a href="/signup">Sign Up</a>
      </div>
      {user.error && (
        <Alert color="danger" className="p-2">
          Error in Logging in. Incorrect userusername and/or password provided
        </Alert>
      )}
    </Container>
  );
};

export default Login;
