import { takeLatest } from 'redux-saga/effects';
import types from '../actionTypes';
import { handleGetCategories } from './handlers/Sidebar';
import { handleGetCatsByCategory } from './handlers/Cats';

export function* watcherSaga() {
        yield takeLatest(types.GET_CATEGORIES, handleGetCategories);
        yield takeLatest(types.GET_CATS, handleGetCatsByCategory);
}