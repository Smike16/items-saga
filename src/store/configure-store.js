import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 * Configure redux store
 * @returns {Object}
 */
export default function configureStore() {
    const store = createStore(
        combineReducers(reducer),
        compose(
            applyMiddleware(sagaMiddleware),
            process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    sagaMiddleware.run(sagas);

    return store;
}
