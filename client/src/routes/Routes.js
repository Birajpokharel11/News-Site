import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout, PublicRoute, PrivateRoute } from './components';
import { Minimal as MinimalLayout, Main as MainLayout } from '../layouts';
import {
  Home as HomePage,
  NotFound as NotFoundView,
  Dashboard as DashboardView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView
} from '../pages';
import { Register, Login, EditRegisteredUser } from '../pages/Auth';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MinimalLayout}
        path="/"
      />
      <PublicRoute
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/register"
      />
      <PublicRoute
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <PrivateRoute
        component={EditRegisteredUser}
        exact
        layout={MainLayout}
        path="/edit_profile"
      />
      <PrivateRoute
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <PrivateRoute
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
