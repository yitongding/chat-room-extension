import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import store from './store';
import ChatRoom from './container/ChatRoom';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <Route exact path="/" component={ChatRoom} />
      </Router>
    </div>
  </Provider>,
  app,
);
