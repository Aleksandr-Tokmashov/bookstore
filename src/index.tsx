import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './services/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);