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
  const [state, setState] = React.useState(1);
  const { path, url } = useRouteMatch();
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then(res => {
      // console.log(res);
    })
  }, [])

  function changeColor() {
    // setColor({
    //   "Android": color.Android === color.ios === color.serve === color.web ? true : false,
    //   "ios": color.ios === flag ? true : false,
    //   "web": color.web === flag ? true : false,
    //   "serve": color.serve === flag ? true : false
    // })
    // console.log(color);
  }
  return (
    <div>
      <div className="content">
        <div className="theme">
          <div>移动应用开发实验室</div>
        </div>
        <div className="group">
          <Link to={`${url}/Android`} className={state === 0 ? 'Android' : 'grouplist'} onClick={(e) => setState(0)}>Android</Link>
          <Link to={`${url}/ios`} className={state === 2 ? 'Android' : 'grouplist'} onClick={(e) => setState(2)}>ios</Link>
          <Link to={`${url}/Web`} className={state === 3 ? 'Android' : 'grouplist'} onClick={(e) => setState(3)}>Web</Link>
          <Link to={`${url}/Server`} className={state === 4 ? 'Android' : 'grouplist'} onClick={(e) => setState(4)}>Server</Link>
        </div>
      </div>
      <div className="groupMessage">
        <Switch>
          <Route path={`${path}/Android`} component={Android} />
          <Route path={`${path}/ios`} component={ios} />
          <Route path={`${path}/Web`} component={Web} />
          <Route path={`${path}/Server`} component={Server} />
          \
          <Redirect to="/member/memberstyle/Android" />
        </Switch>
      </div>
    </div>
  )
}

export default Member
