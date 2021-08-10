import * as React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { menu } from '../../menu';
import Header from '../header';

const Layout: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {menu.map((item) => (
        <Route key={item.key} exact={typeof item.exact !=='undefined' ?item.exact :true} path={item.path}>
          {withRouter(item.component)}
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default Layout;
