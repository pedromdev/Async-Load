import React, {lazy, Suspense} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

export default () => (
  <Router>
    <Suspense fallback={() => 'Loading...'}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);