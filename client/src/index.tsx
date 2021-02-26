import React, { FC, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import EX from '@shared/components/ex';

const App: FC = () => (
  <Router basename="/">
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path={'/'} component={EX} />
        <Redirect path="/" to={'/'} />
      </Switch>
    </Suspense>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
