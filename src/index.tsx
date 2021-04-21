import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './appp2';
import Test from './components/cardImage';
import Test1 from "./atest"
import reportWebVitals from './reportWebVitals';
import Gallery from "./container/Gallery"

ReactDOM.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
