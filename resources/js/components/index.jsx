import React, { lazy } from 'react';
import { render } from 'react-dom';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { history } from '../utils/history';
import { WaitComponent } from '../routes/WaitComponent';
import ModalSwitch from '../routes/ModalSwitch';

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ '../views/Login')
);

const Signup = lazy(() =>
  import(/* webpackChunkName: "Signup" */ './auth/Signup')
);

const CropPicture = lazy(() =>
  import(/* webpackChunkName: "crop" */ '../components/Profile/CropPicture')
);

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/login">
                {WaitComponent(Login)}
              </Route>
              <Route exact path="/signup">
                {WaitComponent(Signup)}
              </Route>
              <Route
                path="/settings/crop"
                component={WaitComponent(CropPicture)}
              />
            </Switch>
            <ModalSwitch />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};
if (document.getElementById('index')) {
  render(<Index />, document.getElementById('index'));
}
