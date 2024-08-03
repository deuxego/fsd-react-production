import { MainLayout } from '@/pages/main-layout/ui/main-layout';
import { SignInPageLazy } from '@/pages/auth/sign-in';
import { SignUpPageLazy } from '@/pages/auth/sign-up';
import { PageLoader } from '@/shared/ui/page-loader';
import { ROUTES } from '@/shared/constants/routes';
import { HomePageLazy } from '@/pages/home-page';
import { Redirect, Route, Switch } from 'wouter';
import { Suspense } from 'react';

export const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignInPageLazy} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPageLazy} />

        <MainLayout>
          <Route path={ROUTES.HOME} component={HomePageLazy} />

          <Route>
            <Redirect to={ROUTES.HOME} />
          </Route>
          
        </MainLayout>

      </Switch>
    </Suspense>
  );
};
