import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import "./styles/index.scss";

import userReducer from './reducers/user.reducer';
import App from './App';
import { getUser } from './actions/user.action';

const store = configureStore({
    reducer : {

        user : userReducer
    }
})
store.dispatch(getUser())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store = {store}>
    <App/>
    </Provider>
 
);


