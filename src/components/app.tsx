import React, { lazy, useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import CenteredMessage from 'components/shared/centered-message';

const MainNavigation = lazy(() => import('components/main-navigation'));
const Footer = lazy(() => import('components/footer'));

const Home = lazy(() => import('components/home'));
const NotFound = lazy(() => import('components/not-found'));

const App = () => {
  /**
   * @TODO
   * Move theme functions to either react context or redux state
   */
  const initialThemeValue = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-light';
  const [theme, setTheme] = useState(initialThemeValue);

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'theme-light' ? 'theme-dark' : 'theme-light');
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <div className={`${theme} transition duration-300 w-screen absolute top-0 bottom-0 flex flex-col bg-primary`}>
      <Suspense fallback={<CenteredMessage message="Loading Components ..." />}>
        <Router>
          <MainNavigation theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route path={ROUTES.HOME} exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
