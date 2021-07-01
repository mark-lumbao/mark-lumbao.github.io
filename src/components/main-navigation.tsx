import { useContext } from 'react';
import * as ROUTES from 'constants/routes';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'providers/theme';
import { isDark } from 'utils';
import logo from 'assets/images/terminal.png';
import github from 'assets/images/github.png';
import sun from 'assets/images/sun.png';
import moon from 'assets/images/moon.png';

const MainNavigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`container ${theme}`}>
      <Link className="menu--item" to={ROUTES.HOME}><img alt="logo" className="logo" src={logo} /></Link>
      <div className="menu">
        <button className="menu--item" aria-label="Theme Switcher" type="button" onClick={toggleTheme}>
          <img alt="github" src={isDark(theme) ? moon : sun} className={`${isDark(theme) ? null : 'invert'}`} />
        </button>
        <a className="menu--item" target="_blank" rel="noopener noreferrer" href="https://github.com/mark-lumbao">
          <img alt="github" src={github} className={`${isDark(theme) ? null : 'invert'}`} />
        </a>
      </div>
    </nav>
  );
};

export default MainNavigation;
