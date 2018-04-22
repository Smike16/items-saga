import { take, call, put, fork, takeLatest } from 'redux-saga/effects';
import {
    FETCH_ITEMS_SUCCESS,

    FETCH_FAVOURITES_REQUEST,
    FETCH_FAVOURITES_SUCCESS,
    FETCH_FAVOURITES_FAILURE,

    UPDATE_FAVOURITE_REQUEST,
    UPDATE_FAVOURITE_SUCCESS,
    UPDATE_FAVOURITE_FAILURE
} from '../constants/action-types';
import * as Api from '../api';

/**
 * Fetch favourites saga
 *
 * @param {Array} ids — array of items ids
 */
function* fetchFavourites(ids) {
    try {
        const response = yield call(Api.fetchFavourites, ids);
        yield put({ type: FETCH_FAVOURITES_SUCCESS, response });
    } catch (error) {
        yield put({ type: FETCH_FAVOURITES_FAILURE, error })
    }
}

/**
 * Update item favourite flag
 *
 * @param {Object} action
 * @param {number} action.itemId
 */
function* updateFavourite({ itemId }) {
    try {
        yield call(Api.updateFavourite, itemId);
        yield put({ type: UPDATE_FAVOURITE_SUCCESS, itemId });
    } catch (error) {
        yield put({ type: UPDATE_FAVOURITE_FAILURE });
    }
}

/**
 * Watchers
 */
function* watchFetchFavourites() {
    while (true) {
        const { response } = yield take(FETCH_ITEMS_SUCCESS);

        yield put({ type: FETCH_FAVOURITES_REQUEST });
        yield call(fetchFavourites, response.items.map(item => item.id));
    }
}

function* watchUpdateFavourites() {
    yield takeLatest(UPDATE_FAVOURITE_REQUEST, updateFavourite);
}

export default [
    fork(watchFetchFavourites),
    fork(watchUpdateFavourites)
];
