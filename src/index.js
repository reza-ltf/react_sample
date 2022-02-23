import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClientMonitor from 'skywalking-client-js';

ClientMonitor.register({
  collector: 'http://2.144.6.32:11800',
  service: 'test-ui',
  pagePath: `${process.env.PUBLIC_URL}/index.html`,
  serviceVersion: 'v1.0.0',
  useFmp: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
