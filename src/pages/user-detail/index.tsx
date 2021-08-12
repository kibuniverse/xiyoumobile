import * as React from 'react'
import { useParams } from 'react-router'
import { getMemberDetail } from '../../api/member/index'
import { GetMemberMessage } from '../../api/member/interface'

const UserDetail: React.FC = () => {
  // const [activityInfo, setActivityInfo] = React.useState({})
  const { username } = useParams<{username:string}>();
  const [data,setData] = React.useState<GetMemberMessage|null>(null);
  React.useEffect(() => {
    getMemberDetail(username).then(res => {
      if (res) {
        console.log(res);
        setData(res);
        return
      }
        message.error('服务器开小差了...')
    })
  },[])
  return (
    <div>信息</div>
  )
}

export default UserDetail
