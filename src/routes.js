import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Detalhes from './pages/Detalhes';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/repositores">
          <Detalhes />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
