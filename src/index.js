import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
// import fetchShelters from './actions';

import App from './App';
import './index.css';

class ShelterFinder {

  constructor() {
    this.loggerMiddleware = createLogger();
    this.store = createStore(
      mainReducer,
          applyMiddleware(
              thunkMiddleware,
              this.loggerMiddleware
          )
      );

    this.store.dispatch({
      type: 'FETCH_SHELTERS',
    });

    this.render();
  }

  render() {
    ReactDOM.render(
      <Provider store={this.store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  }
}

const shelterFinder = new ShelterFinder();



