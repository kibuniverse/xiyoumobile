import * as React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Popover } from 'antd'
import { getgraduateMemberInfo } from '../../../../api/member'
import { GraduateMemberInfo } from '../../../../api/member/interface'
import './index.less'

// 成员
const Member: React.FC = () => {
  const [graduatelist, setList] = React.useState<GraduateMemberInfo[]>([])
  const { path } = useRouteMatch()

  React.useEffect(() => {
    const changeYear = path.substr(17, 4)
    getgraduateMemberInfo({ size: 100, year: `${changeYear as any}` }).then((res) => {
      if (res) {
        setList(res.dataList)
      }
    })
  }, [path])
  return (
    <div className="graduateMess">
      <div className="graduateWrapper">
        {graduatelist.map((item) => {
          const { username, name, team, graduateImg, company, signature } = item
          return (
            <div className="wrapperMess">
              <Link to={`/user-detail/${username}`}>
                <div className="wrapperPersonMess">
                  <img src={graduateImg as string} alt="" />
                  <p className="name">{name}</p>
                  <p className="team">{team}</p>
                  <p className="compony">{company}</p>
                  <Popover content={signature} trigger="hover">
                    <p className="motto">{signature}</p>
                  </Popover>
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
