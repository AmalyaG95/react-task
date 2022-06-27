import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import ResultsReducer from './reducers/ResultsReducer';
import watcherSaga from './saga';

const reducer = combineReducers({
  ResultsState: ResultsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watcherSaga);

window.store = store;