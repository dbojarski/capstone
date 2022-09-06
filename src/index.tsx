import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';
import { Spinner } from './components/spinner/Spinner';

const Authentication = lazy(
  () => import('./routes/authentication/Authentication')
);
const Home = lazy(() => import('./routes/home/Home'));
const Shop = lazy(() => import('./routes/shop/Shop'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
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
        </Elements>
      </PersistGate>
    </Provider>
  </Suspense>
);
serviceWorkerRegistration.register();
