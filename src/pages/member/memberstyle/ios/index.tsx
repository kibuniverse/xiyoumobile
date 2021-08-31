import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { filter } from 'remeda';
import { getMemberInfo } from '../../../../api/member'
import { MemberInfo } from '../../../../api/member/interface';
import './index.less'
// 成员
const Member: React.FC = () => {
  const [grouplist, setList] = React.useState< MemberInfo[]> ([]);
  console.log(grouplist);
  
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'iOS' }).then(res => {
      if (res) {
        console.log(res);
        setList(res.dataList);
        return;
      }
    })
  }, [])

  return (
    <div className="groupPerson">
        <div className="groupTheme">IOS组成员</div>
        <div className="groupMessageI"
        >
          {grouplist.map((item) => {
          const {name, team, mienImg} = item;
          return (
            <div className="personMessage">
            <div className="mess">
              <p className="name">{name}</p>
              <div className="job">
                <p>{team}</p>
              </div>
            </div>
            <div className="pic">
              <img src={mienImg as string} alt=""/>
              <i className="icon"></i>
            </div>
          </div>
          )
        })}
        </div>
        
        
    </div>
  )
}

export default Member