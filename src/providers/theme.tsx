import {
  ReactNode, useState, createContext, useEffect,
} from 'react';

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const initialThemeValue = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-light';
  const [theme, setTheme] = useState(initialThemeValue);

  useEffect(() => {
    if (theme === 'theme-dark') document.body.style.background = '#333';
    else document.body.style.background = '#fff';
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'theme-light' ? 'theme-dark' : 'theme-light');
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={theme || 'theme-light'}>{children}</main>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
