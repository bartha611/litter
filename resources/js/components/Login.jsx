import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const submit = async () => {
    const auth = await Axios.post('api/login', { name, password });
    console.log(auth.data);
    return auth.data;
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
