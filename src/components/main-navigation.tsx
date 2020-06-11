import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import logo from 'assets/images/terminal.png';
import github from 'assets/images/github.png';
import sun from 'assets/images/sun.png';
import moon from 'assets/images/moon.png';

interface NavProps {
  toggleTheme: () => void;
  theme: string;
}

const isDark = (theme: string) => theme === 'theme-dark';

const MainNavigation = ({ toggleTheme, theme }: NavProps) => (
  <nav className="border-dashed border-b-2 border-secondary p-3">
    <div className="container mx-auto flex items-center">
      <Link to={ROUTES.HOME} className="flex flex-1 items-center flex-initial">
        <img alt="logo" src={logo} className="w-8 mr-2" />
        <span className="font-bold text-base text-primaryCopy">
          &#123; m-a-l &#125; v0.5
        </span>
      </Link>
      <div className="flex flex-1 justify-end">
        <button className="focus:outline-none" aria-label="Theme Switcher" type="button" onClick={() => { toggleTheme(); }}>
          <img alt="github" src={isDark(theme) ? moon : sun} className={`${isDark(theme) ? null : 'invert'} mr-4 w-8 xsm:w-7`} />
        </button>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/doldol999">
          <img alt="github" src={github} className={`${isDark(theme) ? null : 'invert'} mr-2 w-8 xsm:w-7`} />
        </a>
      </div>
    </div>
  </nav>
);

export default MainNavigation;
