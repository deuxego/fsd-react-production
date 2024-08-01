import { createContext, Dispatch, SetStateAction } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const themeContext = createContext({} as ThemeContext);
