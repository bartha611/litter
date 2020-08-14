import React, { useState } from 'react';
import {
  Container,
  Form,
  Input,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

import { useDispatch } from 'react-redux';
import { authRequest } from '../../state/ducks/auth';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const submit = () => {
    dispatch(
      authRequest('POST', '/api/user/register', 'SIGNUP', history, {
        user,
        email,
        password
      })
    );
  };

  return (
    <Container>
      <Col xs="12" lg="6" className="m-auto pt-5">
        <h1 className="text-center">Sign Up for Bitter</h1>
        <br />
        <Form>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={e => setUser(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={e => setEmail(e.target.value)}
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
              type="password"
              name="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
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
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </InputGroup>
        </Form>
        <br />
        <Button
          color="primary"
          disabled={confirmPassword !== password || password.length === 0}
          onClick={() => submit()}
          className="w-100"
        >
          Submit
        </Button>
        <br />
        <div className="login text-center">
          Already a member? <a href="/login">Login</a>
        </div>
      </Col>
    </Container>
  );
};

export default SignUp;
