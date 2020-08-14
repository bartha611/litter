import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute';
import { history } from '../utils/history';

import { Container, Row, Col } from 'reactstrap';
import Sidebar from './sidebar';
import SearchBar from './searchBar';

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ '../views/Login')
);

const Signup = lazy(() =>
  import(/* webpackChunkName: "Signup" */ './auth/Signup')
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

const Search = lazy(() =>
  import(/* webpackChunkName: 'Serach' */ '../views/Search')
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
          <Router history={history}>
            <Switch>
              <Route exact path="/login">
                {waitComponent(Login)}
              </Route>
              <Route exact path="/signup">
                {waitComponent(Signup)}
              </Route>
              <PrivateRoute
                exact
                path="/search"
                component={waitComponent(Search)}
              />
              <Route>
                <Container>
                  <Row>
                    <Col xs="12" md="1" lg="2">
                      <Sidebar />
                    </Col>
                    <Col xs="12" md="7" lg="6" className="main">
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
                    <Col xs="0" md="4" lg="3">
                      <SearchBar type="sidebar" />
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
