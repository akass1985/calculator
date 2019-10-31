import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import rootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const initialValues = { 
        buffer: "0+",
        result: "0",
        stack: false,
        log: []
};

const store = createStore(
        rootReducer, 
        // initialValues,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
)
