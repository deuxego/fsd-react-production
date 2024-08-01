import { ThemeProvider } from '@/shared/contexts/theme';
import ErrorBoundary from '@/shared/ui/error-boundary';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return (
    <ErrorBoundary>
      <ThemeProvider>{props.children}</ThemeProvider>
    </ErrorBoundary>
  );
};
