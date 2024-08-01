import { ThemeProvider } from '@/shared/contexts/theme';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};
