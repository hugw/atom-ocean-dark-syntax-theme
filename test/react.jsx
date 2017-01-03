/**
 * Routes
 *
 * @copyright Copyright (c) 2016
 * @license MIT
 */

import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import { onEnterAuth } from './resolvers/auth';
import { App, Auth, SignIn, NotFound } from './components';

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/auth" component={Auth} onEnter={onEnterAuth}>
        <IndexRoute component={SignIn} />
        <Route path="sign-in" component={SignIn} />
      </Route>

      <Route path="*" component={NotFound} status={404} />
    </Route>
  </Router>
);
