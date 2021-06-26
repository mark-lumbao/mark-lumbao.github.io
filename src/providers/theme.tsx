import { ReactNode, useState, createContext } from 'react';

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const initialThemeValue = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-light';
  const [theme, setTheme] = useState(initialThemeValue);

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'theme-light' ? 'theme-dark' : 'theme-light');
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme || 'theme-light'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
