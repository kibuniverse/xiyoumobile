import * as React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { menu } from '@/menu'
import Footer from '../footer'
import Header from '../header'
import { BackTop } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import './index.less'

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
}
const Layout: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {menu.map((item) => (
        <Route
          key={item.key}
          exact={typeof item.exact !== 'undefined' ? item.exact : true}
          path={item.path}
        >
          {withRouter(item.component)}
        </Route>
      ))}
    </Switch>
    {/* <Footer /> */}
    <BackTop>
      <VerticalAlignTopOutlined style={{ fontSize: '30px', color: '#08c' }} />
    </BackTop>
  </BrowserRouter>
)

export default Layout
