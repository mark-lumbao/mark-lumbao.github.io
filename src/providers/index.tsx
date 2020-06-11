import React from 'react';
import App from 'components/app';
import ReduxProvider from './redux';
import 'assets/tailwind.css';

// eslint-disable-next-line no-console
console.log(
  '%cWHY YOU HERE BOY? t(-_-t)',
  'font-size: 30px; color: red; font-weight: bolder; text-shadow: 2px 2px orange',
);

const Providers = () => (
  <ReduxProvider>
    <App />
  </ReduxProvider>
);

export default Providers;
