import { PageLoader } from '@/shared/ui/page-loader';
import { HomePageLazy } from '@/pages/home';
import { Route, Switch } from 'wouter';
import { Suspense } from 'react';

export const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={HomePageLazy} />
      </Switch>
    </Suspense>
  );
};
