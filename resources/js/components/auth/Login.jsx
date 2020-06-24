import React, { useState } from 'react';
import {} from '../../state/ducks/tweet';
import { useDispatch } from 'react-redux';
import { authRequest } from '../../state/ducks/auth/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submit = async () => {
    dispatch(
      authRequest('POST', '/api/user/login', 'LOGIN', { username, password })
    );
  };
  return (
    <div className="container pt-5">
      <h1 className="title text-center">Login to Bitter</h1>
      <div className="mx-auto col-md-6">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            placeholder="username"
            type="text"
            className="form-control"
            onChange={e => setUsername(e.target.value)}
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
