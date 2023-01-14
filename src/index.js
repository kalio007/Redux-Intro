import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store';
import { type } from '@testing-library/user-event/dist/type';

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})
store.dispatch({
  type: "bugadded",
  payload:{
    description: "bug1"
  }
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload:{
    id: 1
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
