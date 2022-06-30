import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import AddUserFormReducer from './reducers/AddUserFormReducer';
import UsersListReducer from './reducers/UsersListReducer';
import watcherSaga from './saga';

const reducer = combineReducers({
  AddUserFormState: AddUserFormReducer,
  UsersListState: UsersListReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watcherSaga);

window.store = store;