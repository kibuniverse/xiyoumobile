import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { filter } from 'remeda';
import { getgraduateMemberInfo } from '../../../../api/member'
import { GraduateMemberInfo } from '../../../../api/member/interface';
import './index.less'
// 成员
const Member: React.FC = () => {
  const [graduatelist, setList] = React.useState< GraduateMemberInfo[]> ([]);
  // React.useEffect(() => {
  //   // alert(path)
  //   getgraduateMemberInfo({ size: 100, year: '2017' }).then(res => {
  //     if (res) {
  //       console.log(res.dataList);
  //       setList(res.dataList);
  //       return;
  //     }
  //   })
  // }, [])
  let {path,url} = useRouteMatch();
  React.useEffect(() => {
    // console.log(path);
    let changeYear = path.substr(17, 4);
    
    getgraduateMemberInfo({ size: 100, year: `${changeYear as any}` }).then(res => {
      if (res) {
        console.log(res.dataList);
        setList(res.dataList);
        return;
      }
    })
  },[path])
  return (
    <div className="graduateMess">
      <div className="graduateWrapper">
        {graduatelist.map((item) => {
          const {username, name, team, graduateImg,company, signature} = item;
          return(      
              <div className="wrapperMess">
                  <Link to={`/user-detail/${username}`}>
                  <div className="wrapperPersonMess">
                    <img src={graduateImg as string} alt=""/>
                    <p className="name">{name}</p>
                    <p className="team">{team}</p>
                    <p className="compony">{company}</p>
                    <p className="motto">{signature}</p>
                  </div>
                  </Link>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Member
