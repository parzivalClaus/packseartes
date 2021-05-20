import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Animes from '../pages/Animes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Animes} />
    </Switch>
  );
}
