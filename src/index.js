import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import studentReducer from './reducers/index';

const store = createStore(studentReducer,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,  
  document.getElementById('root')
);