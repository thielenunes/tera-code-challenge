

import { Home } from '../pages/home';
import { Details } from '../pages/details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details/:nameId' exact component={Details} />
      </Switch>
    </BrowserRouter>
  )
}