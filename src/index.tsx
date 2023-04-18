import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Providers } from 'shared';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Providers>
          <GlobalStyle />
          <App />
        </Providers>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
