import {call, put} from 'redux-saga/effects';
import { getCategories } from '../requests/Sidebar';
import types from '../../actionTypes';

export function* handleGetCategories() {
    try {
        const categoriesData = yield call(getCategories());
        if (categoriesData.error) {
            throw categoriesData.error;
        }
        yield put({ type: types.SET_CATEGORIES, categories: categoriesData });

    } catch (e) {
        console.log(e);
    }
};