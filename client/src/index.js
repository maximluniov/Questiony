import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import {thunk} from 'redux-thunk'


const store = createStore(reducers, {}, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// console.log('STRIPE KEY is', process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment: " , process.env.NODE_ENV);