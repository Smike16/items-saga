import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Items from './containers/items';
import configureStore from './store/configure-store';
import './index.css';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Items />
    </Provider>,
    document.getElementById('root')
);
