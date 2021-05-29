import * as React from 'react'
import { menu } from '../menu'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Layout = () => (
  <Router>
    <div style={{ color: '#000' }}>
      {menu.map(item => (
        <span key={item.key} style={{ marginRight: '12px' }}>
          <Link to={item.path}>{item.title}</Link>
        </span>
      ))}
    </div>
    <Switch>
      {menu.map(item => (
        <Route key={item.key} exact path={item.path}>{item.component}</Route>
      ))}
    </Switch>
  </Router>
)

export default Layout