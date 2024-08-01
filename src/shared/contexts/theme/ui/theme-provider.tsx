import { PropsWithChildren } from 'react';
import { themeContext } from '../model/theme-context';
import { useThemeProvider } from '../model/use-theme-provider';

export const ThemeProvider = (props: PropsWithChildren) => {
  const { value } = useThemeProvider();

  return <themeContext.Provider value={value}>{props.children}</themeContext.Provider>;
};
