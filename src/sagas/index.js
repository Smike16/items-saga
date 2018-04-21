import { all } from 'redux-saga/effects';
import itemsSagas from './items';
import favouritesSagas from './favourites';

export default function* sagas() {
    yield all([
        ...itemsSagas,
        ...favouritesSagas
    ]);
}
