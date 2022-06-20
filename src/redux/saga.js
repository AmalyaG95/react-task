import { takeLatest } from 'redux-saga/effects';
import {call, put} from 'redux-saga/effects';

import types from './actionTypes';
import { getCategories } from './requests/Sidebar';
import { getCatsByCategory } from './requests/Cats';
import { setCategories, setCats } from './actionCreators';

function* handleGetCategories() {
    try {
        const categoriesData = yield call(getCategories());
        yield put(setCategories(categoriesData));

    } catch (e) {
        console.log(e);
    }
};

function* handleGetCatsByCategory ({payload: {id, limit, page}}) {
    try {
        const catsData = yield call(getCatsByCategory(id, limit, page));
        yield put(setCats(catsData));

    } catch (e) {
        console.log(e);
    }
}

export default function* watcherSaga() {
        yield takeLatest(types.GET_CATEGORIES_REQUEST, handleGetCategories);
        yield takeLatest(types.GET_CATS_REQUEST, handleGetCatsByCategory);
}