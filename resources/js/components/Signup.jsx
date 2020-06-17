import React, { useState } from 'react';

const SignUp = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            onChange={e => setUser(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
