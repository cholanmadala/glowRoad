import React from 'react';
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import App from './views/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
	applyMiddleware(thunk)
  ));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
