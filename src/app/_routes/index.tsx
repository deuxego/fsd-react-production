import { HomePageLazy } from '@/pages/home';
import { PageLoader } from '@/shared/ui/page-loader';
import { Suspense } from 'react';
import { Route, Switch } from 'wouter';

export const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={HomePageLazy} />
      </Switch>
    </Suspense>
  );
};
