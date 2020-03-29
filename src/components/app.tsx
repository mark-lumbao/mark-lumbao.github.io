import * as React from 'react';
import MainNavigation from './main-navigation';
import Terminal from './terminal';
import Footer from './footer';

const App = () => (
  <div className="w-screen h-screen flex flex-col bg-teal-800">
    <MainNavigation />
    <div className="container mx-auto flex-1 py-4 sm:px-2 md:px-2"><Terminal /></div>
    <Footer />
  </div>
);

export default App;
