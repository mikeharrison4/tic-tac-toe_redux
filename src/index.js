import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import { Provider } from 'react-redux'
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
//
// const enhancer = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
//
// );


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
