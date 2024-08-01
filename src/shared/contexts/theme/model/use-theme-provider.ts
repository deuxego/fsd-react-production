import { useEffect, useMemo, useState } from 'react';
import { Theme } from './theme-context';

export const useThemeProvider = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return { value };
};
