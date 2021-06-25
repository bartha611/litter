import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    return Number(exp) * 1000 > new Date().getTime();
  } catch (err) {
    return false;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default PrivateRoute;
