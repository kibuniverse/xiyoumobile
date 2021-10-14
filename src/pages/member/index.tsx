import * as React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import Graduate from '../graduate/index'
import MemberStyle from '../member-style/index'
import './index.less'

const Member: React.FC = () => {
  const { path, url } = useRouteMatch();
  const [state, setState] = React.useState(0);

  return (
    <div className="wrapperMax">
      <div className="wrapper" />
      <div className="member-router">
        <Link
          to={`${url}/graduate`}
          className={state === 0 ? 'memberClick' : 'member-item'}
          onClick={() => {
            setState(0)
          }}
        >
          毕业生
        </Link>
        <Link
          to={`${url}/memberstyle`}
          className={state === 1 ? 'memberClick' : 'member-item'}
          onClick={() => {
            setState(1)
          }}
        >
          成员风采
        </Link>
      </div>
      {/* <div className="memberList"> */}
      <Switch>
        <Route path={`${path}/graduate`} component={Graduate} />
        <Route path={`${path}/memberstyle`} component={MemberStyle} />
        <Redirect to="/member/graduate" />
      </Switch>
      {/* </div> */}
    </div>
  )
}

export default Member
