import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Favorited from '../pages/Favorited';
import Error from '../pages/Erros404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites/" component={Favorited} />
      <Route exact path="*" component={Error} />
    </Switch>
  );
}
