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
  <nav className="p-3 border-b-2 border-dashed border-secondary">
    <div className="container flex items-center mx-auto">
      <Link to={ROUTES.HOME} className="flex items-center flex-1 flex-initial">
        <img alt="logo" src={logo} className="w-8 mr-2" />
        <span className="text-base font-bold text-primaryCopy">
          &#123; m-a-l &#125; v1.2.1
        </span>
      </Link>
      <div className="flex justify-end flex-1">
        <button className="focus:outline-none" aria-label="Theme Switcher" type="button" onClick={() => { toggleTheme(); }}>
          <img alt="github" src={isDark(theme) ? moon : sun} className={`${isDark(theme) ? null : 'invert'} mr-4 w-8 xsm:w-7`} />
        </button>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mark-lumbao">
          <img alt="github" src={github} className={`${isDark(theme) ? null : 'invert'} mr-2 w-8 xsm:w-7`} />
        </a>
      </div>
    </div>
  </nav>
);

export default MainNavigation;
