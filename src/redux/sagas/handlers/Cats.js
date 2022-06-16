import {call, put} from 'redux-saga/effects';
import { getCatsByCategory } from '../requests/Cats';
import types from '../../actionTypes';

export function* handleGetCatsByCategory ({id, limit, page}) {
    try {
        const catsData = yield call(getCatsByCategory(id, limit, page));
        
        if (catsData.error) {
            throw catsData.error;
        }
        yield put({ type: types.SET_CATS, cats: catsData });

    } catch (e) {
        console.log(e);
    }
}