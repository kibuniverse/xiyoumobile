import * as React from 'react'
import { getMemberInfo } from '../../api/member'

// 成员
const Member: React.FC = () => {
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: 'Web' }).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      Member page
    </div>
  )
}

export default Member
