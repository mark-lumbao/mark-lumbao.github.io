import { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import CenteredMessage from 'components/shared/centered-message';

const MainNavigation = lazy(() => import('components/main-navigation'));
const Footer = lazy(() => import('components/footer'));

const Home = lazy(() => import('components/home'));
const NotFound = lazy(() => import('components/not-found'));

const App = () => (
  <Suspense fallback={<CenteredMessage message="Loading Components ..." />}>
    <Router>
      <MainNavigation />
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </Suspense>
);

export default App;
