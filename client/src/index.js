import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './gridSystem.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store1 from './Store'
import {Provider} from 'react-redux'
ReactDOM.render(
  // <React.StrictMode>
   <Provider store={store1}>
      <App />
     </Provider>,
  // </React.StrictMode>,

  document.getElementById("example")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
