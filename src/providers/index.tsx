import React from 'react';
import App from 'components/app';
import ReduxProvider from './redux';
import 'assets/tailwind.css';

const Providers = () => (
  <ReduxProvider>
    <App />
  </ReduxProvider>
);

export default Providers;
