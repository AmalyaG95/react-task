import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import SidebarReducer from './reducers/SidebarReducer';
import CatsReducer from './reducers/CatsReducer';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  SidebarState: SidebarReducer,
  CatsState: CatsReducer,

});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watcherSaga);

window.store = store;