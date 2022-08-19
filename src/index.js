import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './routes/home/Home';
import { Shop } from './routes/shop/Shop';
import { Authentication } from './routes/authentication/Authentication';
import { Checkout } from './routes/checkout/Checkout';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='shop/*' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
