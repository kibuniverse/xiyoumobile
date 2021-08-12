import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import Avatar, { genConfig } from 'react-nice-avatar'
import { getgraduateMemberInfo } from '../../../api/member'
import { GetgraduateMemberReq } from '../../../api/member/interface';
import G2017  from './G2017';
import './index.less'

// 成员
const Member: React.FC = () => {
  let {path,url} = useRouteMatch();
  React.useEffect(() => {
    getgraduateMemberInfo({ size: 100, year: '2017' }).then(res => {
        // console.log(res);
    })
  }, [])
  return (
    <div className="graduate">
        <div className="yearContent">
          <Link to={`${url}/G2017`} className="year"><span>2017</span></Link>
          <Link to={`${url}/G2016`} className="year"><span>2016</span></Link>
          <Link to={`${url}/G2015`} className="year"><span>2015</span></Link>
          <Link to={`${url}/G2014`} className="year"><span>2014</span></Link>
          <Link to={`${url}/G2013`} className="year"><span>2013</span></Link>
          <Link to={`${url}/G2012`} className="year"><span>2012</span></Link>
          <Link to={`${url}/G2011`} className="year"><span>2011</span></Link>
          <Link to={`${url}/G2010`} className="year"><span>2010</span></Link>
          <Link to={`${url}/G2009`} className="years"><span>2009</span></Link>
        </div>
        <div className="graduateMessage">
          <Switch>
            <Route path={`${path}/G2017`} component={G2017}></Route>
            <Route path={`${path}/G2016`} ></Route>
            <Route path={`${path}/G2015`} ></Route>
            <Route path={`${path}/G2014`} ></Route>
            <Route path={`${path}/G2013`} ></Route>
            <Route path={`${path}/G2012`} ></Route>
            <Route path={`${path}/G2011`} ></Route>
            <Route path={`${path}/G2010`} ></Route>
            <Route path={`${path}/G2009`} ></Route>
            <Redirect to={`${path}/G2017`}/> 
          </Switch>
        </div>
    </div>
  )
}

export default Member
