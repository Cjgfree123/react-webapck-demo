import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import test from '../js/middlewares/getTest'; // ??
import reducer from './reducers/index';

// const store = createStore(reducer)

// 详细见源码
const createStoreWithMiddleWare = applyMiddleware(test)(createStore);
const store = createStoreWithMiddleWare(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('app'));