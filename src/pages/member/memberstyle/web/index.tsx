import * as React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Image } from 'antd'
import { getMemberInfo } from '../../../../api/member'
import { MemberInfo } from '../../../../api/member/interface'
import { isDefaultImage } from '../../../../common/utils/is-defalut-img'
import './index.less'

// 成员
const Member: React.FC = () => {
  const [grouplist, setList] = React.useState<MemberInfo[]>([])

  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then((res) => {
      if (res) {
        setList(res.dataList)
      }
    })
  }, [])

  return (
    <div className="groupPerson">
      <div className="groupTheme">Web组成员</div>
      <div className="groupMessage">
        {grouplist.map((item) => {
          const { name, team } = item
          const { mienImg = '' } = item
          const isDefaultImg = isDefaultImage(mienImg || '')
          const config = genConfig({})
          return (
            <div className="personMessage">
              <div className="mess">
                <p className="name">{name}</p>
                <div className="job">
                  <p>{team}</p>
                </div>
              </div>
              <div className="pic">
                {isDefaultImg ? (
                  <Avatar shape="square" style={{ width: '120px', height: '120px' }} {...config} />
                ) : (
                  <Image src={mienImg as string} />
                )}
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
