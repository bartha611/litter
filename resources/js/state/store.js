import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import * as reducers from './ducks';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger]
});

const persistor = persistStore(store);

export { store, persistor };
