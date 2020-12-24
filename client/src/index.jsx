import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import App from './components/app.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
