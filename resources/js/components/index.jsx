import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute';

import { Container, Row, Col } from 'reactstrap';
import Sidebar from './sidebar';

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ '../views/Login')
);

const Home = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ '../views/Home')
);

const Profile = lazy(() =>
  import(/* webpackChunkName: "Profile" */ '../views/Profile')
);

const Follower = lazy(() =>
  import(/* webpackChunkName: "Follower" */ '../views/Follower')
);

function waitComponent(Component) {
  return props => (
    <Suspense fallback={<div>...Loading</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/login">
                {waitComponent(Login)}
              </Route>
              <Route>
                <Container>
                  <Row>
                    <Col xs="2" md="2" lg="2">
                      <Sidebar />
                    </Col>
                    <Col xs="8" md="8" lg="6">
                      <Switch>
                        <PrivateRoute
                          exact
                          path="/"
                          component={waitComponent(Home)}
                        />
                        <PrivateRoute
                          exact
                          path="/:name"
                          component={waitComponent(Profile)}
                        />
                        <PrivateRoute
                          path="/:name/following"
                          component={waitComponent(Follower)}
                        />
                      </Switch>
                    </Col>
                    <Col xs="2" md="2" lg="4">
                      <Sidebar />
                    </Col>
                  </Row>
                </Container>
              </Route>
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
