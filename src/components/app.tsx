import React, { lazy, Suspense } from 'react';

const MainNavigation = lazy(() => import('./main-navigation'));
const Terminal = lazy(() => import('./terminal'));
const Footer = lazy(() => import('./footer'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="w-screen h-screen flex flex-col bg-teal-800">
      <MainNavigation />
      <div className="container mx-auto flex-1 py-4 sm:px-2 md:px-2"><Terminal /></div>
      <Footer />
    </div>
  </Suspense>
);

export default App;
