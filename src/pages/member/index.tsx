import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { filter } from 'remeda';
import { getMemberInfo } from '../../api/member'
import './index.less'
import  Graduate  from './graduate'
import Memberstyle from './memberstyle'
// 成员
const state = {
  current: 0
};

const Member: React.FC = () => {
  let [state, setState] = React.useState(0);
  let {path,url} = useRouteMatch();
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then(res => {
      console.log(res);
    })
  }, [])
  
  return (
    <div className="wrapperMax">
      <div className="wrapper"></div>
      <div className="member-router">
          <Link to={`${url}/graduate`} className={state === 0 ? 'memberOnclick' : 'member-item'} onClick={(e) =>{setState(0)}}>毕业生</Link>
          <Link to={`${url}/memberstyle`} className={state === 2 ? 'memberOnclick' : 'member-item'} onClick={(e) =>{setState(2)}}>成员风采</Link>
      </div>
      <div className="memberlist">
          <Switch>
            <Route path={`${path}/graduate`} component={Graduate}></Route>
            <Route path={`${path}/memberstyle`} component={Memberstyle}></Route>
            <Redirect to='/member/graduate'/> 
          </Switch>
      </div>
    </div>
  )
}

export default Member
