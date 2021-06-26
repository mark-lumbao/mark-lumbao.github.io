import { useContext } from 'react';
import * as ROUTES from 'constants/routes';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'providers/theme';
import logo from 'assets/images/terminal.png';
import github from 'assets/images/github.png';
import sun from 'assets/images/sun.png';
import moon from 'assets/images/moon.png';

const isDark = (theme: string) => theme === 'theme-dark';

const MainNavigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <div>
        <Link to={ROUTES.HOME}>
          <img alt="logo" src={logo} />
          <span>
            &#123; m-a-l &#125; v1.2.1
          </span>
        </Link>
        <div>
          <button aria-label="Theme Switcher" type="button" onClick={toggleTheme}>
            <img alt="github" src={isDark(theme) ? moon : sun} className={`${isDark(theme) ? null : 'invert'}`} />
          </button>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mark-lumbao">
            <img alt="github" src={github} className={`${isDark(theme) ? null : 'invert'}`} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
