import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { menu } from '../../menu'
import Header from '../header'

const Layout: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {menu.map(item => (
        <Route key={item.key} exact path={item.path}>{item.component}</Route>
      ))}
    </Switch>
  </BrowserRouter>
)

export default Layout
