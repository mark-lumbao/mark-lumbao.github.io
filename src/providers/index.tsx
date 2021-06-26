import App from 'components/app';
import 'scss/index.scss';
import ReduxProvider from './redux';
import ThemeProvider from './theme';
// eslint-disable-next-line no-console
console.log(
  '%cWHY YOU HERE BOY? t(-_-t)',
  'font-size: 30px; color: red; font-weight: bolder; text-shadow: 2px 2px orange',
);

const Providers = () => (
  <ReduxProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);

export default Providers;
