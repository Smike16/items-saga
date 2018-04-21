import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE
} from '../constants/action-types';
import * as Api from '../api';

/**
 * Fetch items saga
 */
function* fetchItems() {
    try {
        const response = yield call(Api.fetchItems);
        yield put({ type: FETCH_ITEMS_SUCCESS, response });
    } catch (error) {
        yield put({ type: FETCH_ITEMS_FAILURE, error });
    }
}

/**
 * Watch items
 */
function* watchFetchItems() {
    yield takeLatest(FETCH_ITEMS_REQUEST, fetchItems);
}

export default [
    fork(watchFetchItems)
];
