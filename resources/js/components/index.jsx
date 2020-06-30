import React from 'react';
import { render } from 'react-dom';
import store, { persistor } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Home from './Home';
import Tweet from './tweets/tweet';

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/tweet" component={Tweet} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};
if (document.getElementById('index')) {
  render(<Index />, document.getElementById('index'));
}
