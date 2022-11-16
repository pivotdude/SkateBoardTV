import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer'
import {Provider} from "react-redux";

import App from './App';
import './index.scss';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
