import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import QuestionReducer from './reducers/QuestionReducer';
import ResultsReducer from './reducers/ResultsReducer';

const reducer = combineReducers({
  QuestionState: QuestionReducer,
  ResultsState: ResultsReducer,
});

export const store = createStore(reducer, applyMiddleware(logger));

window.store = store;