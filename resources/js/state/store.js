import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './ducks';
import rootSaga from './middleware/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
