import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest } from '../../state/ducks/auth/actions';
import Axios from 'axios';

const Login = () => {
  useEffect(() => {
    const handleEnter = e => {
      if (e.keyCode === 13) {
        submit();
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const submit = async () => {
    await dispatch(
      authRequest('POST', '/api/user/login', 'LOGIN', { name, password })
    );
    console.log(user);
  };
  return (
    <div className="container pt-5">
      <h1 className="title text-center">Login to Bitter</h1>
      <div className="mx-auto col-md-6">
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            placeholder="name"
            type="text"
            className="form-control"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*****"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className="col-12 mx-auto btn btn-primary"
          onClick={() => submit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
