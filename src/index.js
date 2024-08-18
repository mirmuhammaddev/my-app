import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga"
import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./components/productSlice"
import App from './App';
import productsSaga from "./components/productSaga";

const saga = createSagaMiddleware();
const store = configureStore({
    name: 'product',
    reducer: {
        product: productReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(saga))
});
saga.run(productsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
