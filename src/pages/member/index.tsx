import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { filter } from 'remeda';
import { getMemberInfo } from '../../api/member'
import './index.less'
import  Graduate  from './graduate'
import Memberstyle from './memberstyle'
// 成员
const Member: React.FC = () => {
  let {path,url} = useRouteMatch();
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then(res => {
      console.log(res);
    })
  }, [])
  function memberClick (){
    let memberItem = document.getElementsByClassName('member-item');
    memberItem[0]
    console.log(memberItem[0]);
    
  }
  return (
    <div className="wrapperMax">
      <div className="wrapper"></div>
      <div className="member-router">
          <Link to={`${url}/graduate`} className="member-item" onClick={memberClick}>毕业生</Link>
          <Link to={`${url}/memberstyle`} className="member-item ">成员风采</Link>
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
