import React, { lazy } from 'react';

const MainNavigation = lazy(() => import('components/main-navigation'));
const Terminal = lazy(() => import('components/shared/terminal'));
const Footer = lazy(() => import('components/footer'));

export default () => (
  <div className="w-screen h-screen flex flex-col bg-teal-800">
    <MainNavigation />
    <div className="flex items-center container mx-auto flex-1 py-4 sm:px-2 md:px-2">
      <Terminal />
    </div>
    <Footer />
  </div>
);
