import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import CenteredMessage from 'components/shared/centered-message';

const Home = lazy(() => import('components/home'));
const NotFound = lazy(() => import('components/not-found'));

const App = () => (
  <Suspense fallback={<CenteredMessage message="Loading Components ..." />}>
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
