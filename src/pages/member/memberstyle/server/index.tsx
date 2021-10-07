import * as React from 'react'
import { getMemberInfo } from '../../../../api/member'
import { MemberInfo } from '../../../../api/member/interface'
import './index.less'
// 成员
const Member: React.FC = () => {
  const [groupList, setList] = React.useState<MemberInfo[]>([])
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Server' }).then((res) => {
      if (res) {
        setList(res.dataList)
      }
    })
  }, [])

  return (
    <div className="groupPerson">
      <div className="groupTheme">Server组成员</div>
      <div className="groupMessageS">
        {groupList.map((item) => {
          const { name, team, mienImg } = item
          return (
            <div className="personMessage">
              <div className="mess">
                <p className="name">{name}</p>
                <div className="job">
                  <p>{team}</p>
                </div>
              </div>
              <div className="pic">
                <img src={mienImg as string} alt="" />
                <i className="icon" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Member
