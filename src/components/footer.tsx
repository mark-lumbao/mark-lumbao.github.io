import { ThemeContext } from 'providers/theme';
import { useContext } from 'react';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`container ${theme}`}>
      <span>&#169; &#123; m-a-l &#125; | 2020</span>
    </footer>
  );
};

export default Footer;
