import * as React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { getGraduateMemberInfo } from '@api/member'
import { GraduateMemberInfo } from '@api/member/interface'
import './index.less'

// 成员
const Member: React.FC = () => {
  const [list, setList] = React.useState<GraduateMemberInfo[]>([])
  const { path } = useRouteMatch()

  React.useEffect(() => {
    const changeYear = path.substr(17, 4)
    getGraduateMemberInfo({ size: 100, year: changeYear }).then((res) => {
      if (res) {
        setList(res.dataList)
      }
    })
  }, [path])
  return (
    <div className="graduateMess">
      <div className="graduateWrapper">
        {list.map((item) => {
          const { username, name, team, graduateImg, company, signature } = item
          return (
            <div key={item.name} className="wrapperMess">
              <Link to={`/user-detail/${username}`}>
                <div className="wrapperPersonMess">
                  <img src={graduateImg as string} alt="" />
                  <div className="user-info">
                    <div className="name">{name}</div>
                    <div className="compony">{company}</div>
                  </div>
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
