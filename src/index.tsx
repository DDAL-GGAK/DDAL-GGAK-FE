import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Providers from 'shared/Providers';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </Provider>
  </React.StrictMode>
);
