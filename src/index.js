import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';

import App from './App';
import './index.css';

class ShelterFinder {

  constructor() {
    this.store = createStore(
      mainReducer,
          applyMiddleware(
              thunkMiddleware
          )
      );

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



