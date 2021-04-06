import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { store } from './store';

declare const cordova:any;
declare const window:any;

if (window.cordova) {
  document.addEventListener('deviceready', onDeviceReady, false);
  document.addEventListener("backbutton", onBackKeyDown, false);
}

function onDeviceReady() { }
function onBackKeyDown() {
  return;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);





