import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import SidebarReducer from './reducers/SidebarReducer';
import CatsReducer from './reducers/CatsReducer';

const reducer = combineReducers({
  SidebarState: SidebarReducer,
  CatsState: CatsReducer,

});

export const store = createStore(reducer, applyMiddleware(thunk, logger));
window.store = store;