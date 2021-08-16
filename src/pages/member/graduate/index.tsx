import * as React from 'react'
import { Component } from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import Avatar, { genConfig } from 'react-nice-avatar'
import { getgraduateMemberInfo } from '../../../api/member'
import { GetgraduateMemberReq } from '../../../api/member/interface';
import year  from './year';
import './index.less'


// 成员
const Member: React.FC = () => {
  let {path,url} = useRouteMatch();
  const [state, setState] = React.useState(0);
  const [step, setStep] = React.useState({current:1})
  React.useEffect(() => {
    getgraduateMemberInfo({ size: 100, year: '2017' }).then(res => {
      if (res) {
        // console.log(res);
        return;
      }
    })
  }, [])
  const yearslist = [
    {id: 2017, index: 0},
    {id: 2016, index: 1},
    {id: 2015, index: 2},
    {id: 2014, index: 3},
    {id: 2013, index: 4},
    {id: 2012, index: 5},
    {id: 2011, index: 6},
    {id: 2010, index: 7},
    {id: 2009, index: 8}
  ];
  return (
    <div className="graduate">
        <div className="yearContent">
          {yearslist.map((item) => {
            return <Link to={`${url}/${item.id}`} className={item.id === 2009 ? "years" : "year"} style={{backgroundColor: state === item.index ? "#2e6acc" : "white", color: state === item.index ? "white" : "#2e6acc"}} onClick={(e) =>{setState(item.index)}}><span>{item.id}</span></Link>
          })}
        </div>
        <div className="graduateMessage">
          <Switch>
            {yearslist.map((item) => {
              return (
              <Route path={`${path}/${item.id}`} component={year}></Route>)
            })}
            <Redirect to={`${path}/2017`}/> 
          </Switch>
        </div>
    </div>
  )

}

export default Member
