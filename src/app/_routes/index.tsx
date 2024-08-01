import { MainLayout } from '@/pages/main-layout/ui/main-layout';
import { PageLoader } from '@/shared/ui/page-loader';
import { ROUTES } from '@/shared/constants/routes';
import { HomePageLazy } from '@/pages/home-page';
import { Redirect, Route, Switch } from 'wouter';
import { Suspense } from 'react';

export const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <MainLayout>
        <Switch>
          <Route path={ROUTES.HOME} component={HomePageLazy} />

          <Route>
            <Redirect to={ROUTES.HOME} />
          </Route>

        </Switch>
      </MainLayout>
    </Suspense>
  );
};
