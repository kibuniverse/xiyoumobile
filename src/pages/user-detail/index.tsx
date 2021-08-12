import * as React from 'react'
import { useParams } from 'react-router'
import { getMemberDetail } from '../../api/member/index'
import { GetMemberMessage } from '../../api/member/interface'
import { message } from 'antd'
import './index.less'

const UserDetail: React.FC = () => {
  // const [activityInfo, setActivityInfo] = React.useState({})
  const { id } = useParams<{id:string}>();
  console.log("------",id);
  const [ data,setData ] = React.useState<GetMemberMessage|null>(null);
  React.useEffect(() => {
    getMemberDetail(id).then(res => {
      if (res) {
        console.log(res);
        setData(res);
        return
      }
      message.error('服务器开小差了...')
    })
  },[])
  console.log(data);
  return (
    <div className="user_detail_wrap">
      <div className="user_detail_message">
        <dl>
          <dt>姓名</dt>
          <dd>{data?.name}</dd>
          <dt>班级</dt>
          <dd>{data?.classGrade}</dd>
          <dt>年级</dt>
          <dd>{data?.year}</dd>
          <dt>个性签名</dt>
          <dd className="user_detail_message_only">{data?.signature}</dd>
        </dl>
        <dl>
          <dt>性别</dt>
          <dd>{data?.gender}</dd>
          <dt>组别</dt>
          <dd>{data?.group||"未找到"}</dd>
          <dt>就职公司</dt>
          <dd>{(data?.company)||"暂未入职"}</dd>
        </dl>
      </div>
      <div className="user_detail_img">
        <img src={data?.mienImg} alt="" />
      </div>
    </div>
  )
}

export default UserDetail
