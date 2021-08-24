import { lazy, Suspense } from 'react';
import 'scss/index.scss';
import 'utils/console-message';
import CenteredMessage from 'components/shared/centered-message';

const ReduxProvider = lazy(() => import('./redux'));
const ThemeProvider = lazy(() => import('./theme'));
const App = lazy(() => import('app'));

const Providers = () => (
  <Suspense fallback={<CenteredMessage message="Loading Components ..." />}>
    <ReduxProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </Suspense>
);

export default Providers;
