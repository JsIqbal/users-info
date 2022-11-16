import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './redux/store/store';

import App from './components/App.component';
import('bootstrap/dist/css/bootstrap.min.css');

import ('./styles/index.css');

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
);