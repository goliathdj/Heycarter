import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'


ReactDOM.render(
    <BrowserRouter>
      <LocaleProvider locale={enUS}>
        <App />
      </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
