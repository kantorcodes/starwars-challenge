import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "~/data/starwars/store";
import initialState from "~/data/starwars/initialState";
import { Provider } from 'react-redux'

const deathStar = store(initialState);

render(
    <Provider store={deathStar}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
