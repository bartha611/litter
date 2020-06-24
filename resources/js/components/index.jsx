import React from 'react';
import { render } from 'react-dom';
import store from '../state/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
if (document.getElementById('index')) {
  render(<Index />, document.getElementById('index'));
}
