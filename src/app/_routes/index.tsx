import { PageLoader } from '@/shared/ui/page-loader';
import { HomePageLazy } from '@/pages/home-page';
import { Route, Switch } from 'wouter';
import { Suspense } from 'react';
import { MainLayout } from '@/pages/main-layout/ui/main-layout';

export const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <MainLayout>
        <Switch>
          <Route path="/" component={HomePageLazy} />
        </Switch>
      </MainLayout>
    </Suspense>
  );
};
