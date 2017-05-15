import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchBenches} from './actions/bench_actions';
import {fetchBenches} from './util/bench_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchBenches = fetchBenches;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
