import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Minimal as MinimalLayout } from '../layouts';
import PrivateRoute from './components/PrivateRoute';
import { Home as HomePage, NotFound as NotFoundView } from '../pages';
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
      <RouteWithLayout
        component={Register}
        exact
        layout={MinimalLayout}
        path="/register"
      />
      <RouteWithLayout
        component={Login}
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
      <PrivateRoute component={EditRegisteredUser} exact path="/edit_profile" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
