import React from 'react';
import ReactDOM from 'react-dom';
import Store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
const {store,persistor} = Store();
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
