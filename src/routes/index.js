import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Packs from '../pages/Packs';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Packs} />
    </Switch>
  );
}
