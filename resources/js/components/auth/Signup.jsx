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
import { fetchAuth } from '../../state/ducks/auth';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const submit = () => {
    dispatch(
      fetchAuth('/api/user/register', 'SIGNUP', history, {
        username,
        name,
        email,
        password
      })
    );
  };

  return (
    <Container className="signup">
      <Col xs="12" lg="6" className="m-auto pt-5">
        <h1 className="text-center signup__title">Sign Up for Bitter</h1>
        <br />
        <Form>
          <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} size="2x" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              className="signup__input"
              name="username"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} size="2x" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              className="signup__input"
              name="name"
              placeholder="name"
              onChange={e => setName(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="email"
              className="signup__input"
              name="email"
              placeholder="example@gmail.com"
              onChange={e => setEmail(e.target.value)}
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
              type="password"
              className="signup__input"
              name="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
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
              type="password"
              className="signup__input"
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
          className="signup__button"
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
