import * as React from 'react';
import logo from 'assets/images/terminal.png';
import github from 'assets/images/github.png';

const MainNavigation: React.FC = () => (
  <div className="border-dashed border-b-2 border-teal-400 p-3">
    <div className="container mx-auto flex items-center">
      <div className="flex flex-1 items-center flex-initial">
        <img alt="logo" src={logo} className="w-10 mr-2" />
        <span className="font-heading text-base text-white">mark_lumbao_portfolio_v1.0</span>
      </div>
      <div className="flex flex-1 justify-end">
        <img alt="github" src={github} className="w-8 xsm:w-7" />
      </div>
    </div>
  </div>
);

export default MainNavigation;
