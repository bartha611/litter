import React from 'react';
import { render } from 'react-dom';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '../utils/history';
import ModalSwitch from '../routes/ModalSwitch';

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
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
