import * as React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { getMemberInfo } from '../../../api/member'
import './index.less'
import Android from '../memberstyle/Android'
import ios from '../memberstyle/ios'
import Web from '../memberstyle/web'
import Server from '../memberstyle/server'

const config = genConfig({ sex: 'man' })

// 成员
const Member: React.FC = () => {
  let {path,url} = useRouteMatch();
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then(res => {
      // console.log(res);
    })
  }, [])
  return (
    <div>
      <div className="content">
        <div className="theme">
          <div>移动应用开发实验室</div>
        </div>
        <div className="group">
              <Link to={`${url}/Android`} className="grouplist Android">Android</Link>
              <Link to={`${url}/ios`} className="grouplist ios">ios</Link>
              <Link to={`${url}/Web`} className="grouplist Web">Web</Link>
              <Link to={`${url}/Server`} className="grouplist Server">Server</Link>
        </div>
      </div>
      <div className="groupMessage">
          <Switch>
              <Route  path={`${path}/Android`} component={Android}></Route>
              <Route  path={`${path}/ios`} component={ios}></Route>
              <Route  path={`${path}/Web`} component={Web}></Route>
              <Route  path={`${path}/Server`} component={Server}></Route>\
              <Redirect to='/member/memberstyle/Android'/> 
            </Switch>
        </div>
    </div>
  )
}

export default Member
