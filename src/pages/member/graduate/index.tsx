import * as React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { getMemberInfo } from '../../../api/member'
import './index.less'

const config = genConfig({ sex: 'man' })

// 成员
const Member: React.FC = () => {
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Member
