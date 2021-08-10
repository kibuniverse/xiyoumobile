import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { filter } from 'remeda';
import { getMemberInfo } from '../../../../api/member'
import { MemberInfo } from '../../../../api/member/interface';
import './index.less'
// 成员
const Member: React.FC = () => {
  // let {path,url} = useRouteMatch();
  const [grouplist, setList] = React.useState< MemberInfo[]> ([]);
  console.log(grouplist);
  
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Server' }).then(res => {
      if (res) {
        console.log(res);
        // res.dataList.
        setList(res.dataList);
        return;
      }
    })
  }, [])

  return (
    <div className="groupPerson">
        <div className="groupTheme">Server组成员</div>
        <div className="groupMessage"
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
